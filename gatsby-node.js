const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const fetch = require("node-fetch");
/*
    Sources exchange data and creates nodes for Gatsby to query at build time with GraphQL.
    Made two seperate calls to API because you cannot get all data from one call.
*/
exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
}) => {
	const fetchExchanges = async (page, per_page) => {
		try {
			const url = `https://api.coingecko.com/api/v3/exchanges?per_page=${per_page}0&page=${page}`;
			const response = await fetch(url);
			const data = response.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	};
	await Promise.all([fetchExchanges(1, 250), fetchExchanges(2, 250)]).then(
		([exchange1, exchange2]) => {
			const aggregateExchanges = exchange1.concat(exchange2);
			aggregateExchanges.forEach((exchange) => {
				const {
					name,
					country,
					url,
					image,
					trust_score_rank,
					year_established,
					description,
					id,
				} = exchange;
				const node = {
					name,
					country,
					url,
					image,
					trust_score_rank,
					year_established,
					description,
					id: createNodeId(id),
					internal: {
						type: "Exchange",
						contentDigest: createContentDigest(exchange),
					},
				};
				actions.createNode(node);
			});
		}
	);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
	const result = await graphql(
		`
			{
				allExchange {
					edges {
						node {
							name
						}
					}
				}
			}
		`
	);
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}
	// ...
	// Create exchange-list pages
	const exchanges = result.data.allExchange.edges;
	const exchangesPerPage = 10;
	const numPages = Math.ceil(exchanges.length / exchangesPerPage);
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/exchanges` : `/exchanges/${i + 1}`,
			component: path.resolve("./src/templates/exchange-list-templates.js"),
			context: {
				limit: exchangesPerPage,
				skip: i * exchangesPerPage,
				numPages,
				currentPage: i + 1,
			},
		});
	});
};
