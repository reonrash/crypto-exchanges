import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledExchangeListItem = styled.li`
	display: flex;

	padding: 20px;
	margin-bottom: 15px;
	background-color: white;
	border-radius: 20px;
	gap: 20px;
	&:hover {
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
	}
`;

const StyledTitleSection = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 50px;
		height: 50px;
	}
`;

const StyledInfoSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20px;
	overflow-wrap: break-word;
	word-wrap: break-word;

	-ms-word-break: break-all;
	/* This is the dangerous one in WebKit, as it breaks things wherever */
	word-break: break-all;
	/* Instead use this non-standard one: */
	word-break: break-word;

	/* Adds a hyphen where the word breaks, if supported (No Blink) */
	-ms-hyphens: auto;
	-moz-hyphens: auto;
	-webkit-hyphens: auto;
	hyphens: auto;
	a:hover {
		background-color: #0d5953;
	}
	h5 {
		font-size: 1.3rem;
		margin-bottom: 5px;
	}
	p {
		color: grey;
	}

	a {
		display: block;
		background-color: #17a398;
		width: 50px;
		line-height: 50px;
		border-radius: 25px;
		color: white;
		text-align: center;
		text-decoration: none;
	}
	@media screen and (min-width: 500px) {
		flex-direction: row;
		align-items: center;
		a {
			display: block;
			background-color: #17a398;
			width: 50px;
			line-height: 50px;
			border-radius: 25px;
			color: white;
			text-align: center;
			text-decoration: none;
		}
	}
`;

const ExchangeInfo = ({ id, name, country, url, image, trust_score_rank }) => {
	return (
		<StyledExchangeListItem key={id}>
			<StyledTitleSection>
				<img alt="company logo" src={image}></img>
			</StyledTitleSection>
			<StyledInfoSection>
				<div>
					<h5> {name}</h5>
					<p>
						{country ? `📍 ${country}` : "🚫 Country not known"} |{" "}
						{url ? url : "🚫 URL not known"} |{" "}
						{trust_score_rank
							? trust_score_rank
							: "🚫 Trust score rank not known"}
					</p>
				</div>
				<div>
					<Link to={`/exchange/${id}`}>→</Link>
				</div>
			</StyledInfoSection>
		</StyledExchangeListItem>
	);
};

export default ExchangeInfo;
