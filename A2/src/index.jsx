import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./parts/main";
import "./scss/index.scss";

const root = ReactDOM.createRoot(document.querySelector("#container"));

root.render(
  <>
    <Main />
  </>,
);
