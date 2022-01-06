import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import Layout from "../../components/Layout";

const ExchangePage = (props) => {
	const [exchangeData, setExchangeData] = useState({});
	console.log(exchangeData);
	useEffect(() => {
		// get data from GitHub api
		fetch(`https://api.coingecko.com/api/v3/exchanges/${props.params.id}`)
			.then((response) => response.json()) // parse JSON from request
			.then((resultData) => {
				setExchangeData(resultData);
			}); // set data for the number of stars
	}, []);

	return (
		<Layout>
			<main>
				<h1>Hello World</h1>
				<button
					onClick={() => {
						navigate(-1);
					}}
				>
					Go Back
				</button>
				<div>
					{Object.keys(exchangeData).length !== 0 && (
						<div>
							<img alt="logo" src={exchangeData.image}></img>
							<p>{exchangeData.name}</p>
							<p>{exchangeData.year_established}</p>
							<p>{exchangeData.country}</p>
							<p>{exchangeData.description}</p>
							<p>{exchangeData.trust_score_rank}</p>
						</div>
					)}
				</div>
			</main>
		</Layout>
	);
};

export default ExchangePage;
