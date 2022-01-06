import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const ExchangeList = (props) => {
	console.log(props);
	return (
		<Layout>
			<main>
				<h1>Hello World</h1>
			</main>
		</Layout>
	);
};

export const blogListQuery = graphql`
	query exchangeListQuery($skip: Int!, $limit: Int!) {
		allExchange(limit: $limit, skip: $skip) {
			edges {
				node {
					name
				}
			}
		}
	}
`;

export default ExchangeList;
