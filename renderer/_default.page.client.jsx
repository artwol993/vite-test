import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";

hydrate();

async function hydrate() {
  const pageContext = await getPage(); // (`pageContext` is preloaded in production)
  const { Page, pageProps } = pageContext
  ReactDOM.hydrate(
    <Page {...pageProps} />,
    document.getElementById("page-view")
  );
}