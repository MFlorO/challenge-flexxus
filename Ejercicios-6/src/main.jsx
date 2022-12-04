import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductProvider } from "~/Hook/productContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
