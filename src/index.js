import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
// const root = ReactDOM.cerateRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
registerServiceWorker();
