import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SocialMediaIcon from "../../components/SocialMediaIcon";

const StyledMain = styled.main`
	width: 95%;
	margin: 0 auto;

	button {
		display: block;
		width: 50px;
		margin-bottom: 50px;
		font-size: 1.2rem;
		border: none;
		background-color: ${({ theme }) => theme.colors.button.default};
		line-height: 50px;
		border-radius: 25px;
		color: white;
		text-align: center;
	}
	button:hover {
		background-color: ${({ theme }) => theme.colors.button.hover};
	}
	span {
		margin-left: 3px;
		font-weight: bold;
	}
`;
const StyledExchange = styled.div`
	max-width: 700px;
	margin: 0 auto;

	h2 {
		font-size: 2rem;
		margin 10px 0;
		margin-bottom: 30px;
	}
	p {
		margin: 5px 0;
	}
	a {
		margin-right: 10px;
	}
`;

const ExchangePage = (props) => {
	const [exchangeData, setExchangeData] = useState({});
	console.log(exchangeData);
	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/exchanges/${props.params.id}`)
			.then((response) => response.json())
			.then((data) => {
				setExchangeData(data);
			});
	}, []);

	return (
		<Layout>
			<StyledMain>
				<button
					onClick={() => {
						navigate(-1);
					}}
				>
					{" "}
					←
				</button>
				{Object.keys(exchangeData).length !== 0 && (
					<StyledExchange>
						<img alt="logo" src={exchangeData.image}></img>
						<h2>{exchangeData.name}</h2>
						<p>
							- 🗓 <span>Established: </span>
							{exchangeData.year_established
								? exchangeData.year_established
								: "🚫"}
						</p>
						<p>
							- 🌎 <span>Located: </span>{" "}
							{exchangeData.country ? exchangeData.country : "🚫"}
						</p>
						<p>
							- 👍<span>Trust score rank:</span>{" "}
							{exchangeData.trust_score_rank
								? exchangeData.trust_score_rank
								: "🚫"}
						</p>
						<p>
							- 📝 <span>Description:</span>{" "}
							{exchangeData.description ? exchangeData.description : "🚫"}
						</p>
						<p>
							- <span>Social media links:</span>{" "}
							{exchangeData.reddit_url ||
							exchangeData.telegram_url ||
							exchangeData.slack_url ||
							exchangeData.facebook_url ||
							exchangeData.twitter_handle
								? ""
								: "🚫"}
						</p>
						<div>
							{exchangeData.reddit_url && (
								<SocialMediaIcon
									url={exchangeData.reddit_url}
									type={"reddit"}
								></SocialMediaIcon>
							)}
							{exchangeData.telegram_url && (
								<SocialMediaIcon
									url={exchangeData.telegram_url}
									type={"telegram"}
								></SocialMediaIcon>
							)}
							{exchangeData.slack_url && (
								<SocialMediaIcon
									url={exchangeData.slack_url}
									type={"slack"}
								></SocialMediaIcon>
							)}
							{exchangeData.facebook_url && (
								<SocialMediaIcon
									url={exchangeData.facebook_url}
									type={"facebook"}
								></SocialMediaIcon>
							)}
							{exchangeData.twitter_handle && (
								<SocialMediaIcon
									url={`https://twitter.com/` + exchangeData.twitter_handle}
									type={"twitter"}
								></SocialMediaIcon>
							)}
						</div>
					</StyledExchange>
				)}
			</StyledMain>
		</Layout>
	);
};

export default ExchangePage;
