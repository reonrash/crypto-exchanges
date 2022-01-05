import React from "react";
import GlobalStyles from "./styles/globalStyles";

export default function Layout({ children }) {
	return (
		<div>
			<GlobalStyles />
			{children}
		</div>
	);
}
