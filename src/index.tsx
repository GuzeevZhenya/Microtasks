import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { User } from "./Wrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);
