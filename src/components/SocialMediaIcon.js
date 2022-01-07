import React from "react";
import styled from "styled-components";
import reddit from "../images/reddit.svg";
import facebook from "../images/facebook.svg";
import slack from "../images/slack.svg";
import telegram from "../images/telegram.svg";
import twitter from "../images/twitter.svg";

const map = {
	reddit: reddit,
	facebook: facebook,
	telegram: telegram,
	slack: slack,
	twitter: twitter,
};

const Icon = styled.a`
	 {
		& {
			opacity: 0.5;
		}
		&:hover {
			opacity: 1;
		}
	}
`;

const SocialMediaIcon = ({ url, type }) => {
	return (
		<Icon href={url}>
			<img src={map[type]} alt="social media icon"></img>
		</Icon>
	);
};

export default SocialMediaIcon;
