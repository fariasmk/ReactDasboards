import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";

import dracula from "./styles/themes/dracula";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dracula}>
            <GlobalStyles/>
            <Routes/>   
        </ThemeProvider>
    );
}

export default App;         