import React from "react";
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { createStore } from "redux";
// import reducer from "./redux/reducer";

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
