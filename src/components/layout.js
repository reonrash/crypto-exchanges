import React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const theme = {
	colors: {},
};

const StyledLayout = styled.div`
	max-width: 1300px;
	width: 95%;
	margin: 0 auto;
	nav a {
		text-decoration: none;
		color: black;
	}
	nav {
		margin: 40px 0;
	}
`;

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<StyledLayout>
				<GlobalStyles />
				<nav>
					<Link to="/exchanges">Exchange TRACKR</Link>
				</nav>
				{children}
			</StyledLayout>
		</ThemeProvider>
	);
};
export default Layout;
