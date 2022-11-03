import "./reset.css";
// want reset at top
import "./index.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "./store/ApolloProvider";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
