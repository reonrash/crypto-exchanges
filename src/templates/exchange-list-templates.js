import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const ExchangeList = ({ data, pageContext }) => {
	const exchanges = data.allExchange.edges;
	const { currentPage, numPages } = pageContext;
	return (
		<Layout>
			<main>
				<h1>Exchanges</h1>
				<ul>
					{exchanges.map(({ node }) => {
						const { id, name, country, url, image, trust_score_rank } = node;
						return (
							<li key={id}>
								<p> {name}</p>
								<img src={image}></img>
								<p>{country}</p>
								<p>{url}</p>
								<p>{trust_score_rank}</p>
								<Link to={`/exchange/${id}`}>Learn More</Link>
							</li>
						);
					})}
				</ul>
			</main>
			<nav>
				{currentPage != 1 && (
					<Link to={`/exchanges/${currentPage - 1}`}>Previous</Link>
				)}
				{`${currentPage}/${numPages}`}
				{currentPage != numPages && (
					<Link to={`/exchanges/${currentPage + 1}`}>Next</Link>
				)}
			</nav>
		</Layout>
	);
};

export const blogListQuery = graphql`
	query exchangeListQuery($skip: Int!, $limit: Int!) {
		allExchange(limit: $limit, skip: $skip) {
			edges {
				node {
					id
					name
					country
					url
					image
					trust_score_rank
					trust_score
				}
			}
		}
	}
`;

export default ExchangeList;
