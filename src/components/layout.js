import React from "react";
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
	padding: 50px 0;
`;

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<StyledLayout>
				<GlobalStyles />

				{children}
			</StyledLayout>
		</ThemeProvider>
	);
};
export default Layout;
