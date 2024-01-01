import React from "react";

import { Container } from "./styles";

interface ChildrenProps {
	children: React.ReactNode;
}
 
const Content: React.FC<ChildrenProps> = ({ children }) => (
	<Container>
		{children}
	</Container>
);
 
export default Content;