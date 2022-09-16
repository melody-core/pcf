import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterView from "./client/router";

import "antd/dist/antd.css";
import "./index.css";

const Index = () => {
  return (
    <BrowserRouter>
      <RouterView />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
