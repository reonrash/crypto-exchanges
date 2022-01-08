import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import ExchangeInfo from "../components/ExchangeInfo";

const StyledMain = styled.main`
	width: 95%;
	margin: 0 auto;

	ul {
		list-style-type: none;
	}

	h1 {
		padding-bottom: 30px;
	}

	h3 {
		font-size: 1.5rem;
	}

	p:nth-child(3) {
		margin: 20px 0;
	}
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 40px 35px;

	a {
		color: black;
	}
`;

const ExchangeList = ({ data, pageContext }) => {
	const exchanges = data.allExchange.edges;
	const { currentPage, numPages } = pageContext;
	return (
		<Layout>
			<StyledMain>
				<h1>Crypto Exchanges</h1>
				<h3>Learn about all the different crypto exchanges on Coin Gecko!</h3>
				<p>
					Explore the list below to find new exchanges. Click on the green arrow
					to learn more about an exchange. Information below includes where the
					exchange is headquarted, trust rank, and url to website. Some
					information is not available and will have 🚫 in its place.
				</p>
				<ul>
					{exchanges.map(({ node }) => {
						const { id, name, country, url, image, trust_score_rank } = node;
						const exchangeInfoProps = {
							id,
							name,
							country,
							url,
							image,
							trust_score_rank,
						};
						return (
							<ExchangeInfo key={id} {...exchangeInfoProps}></ExchangeInfo>
						);
					})}
				</ul>
			</StyledMain>
			<StyledNav>
				<span>
					{currentPage !== 1 && (
						<Link to={`/exchanges/${currentPage - 1}`}>Prev</Link>
					)}
				</span>
				<span>{`Page: ${currentPage} of ${numPages}`}</span>
				<span>
					{currentPage !== numPages && (
						<Link to={`/exchanges/${currentPage + 1}`}>Next</Link>
					)}
				</span>
			</StyledNav>
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
