import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Provider from "./Providers";

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <BrowserRouter>
                <GlobalStyles />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
