import React from "react";
import { render } from "react-dom";
import App from "./app";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firease";
import firebase from "./lib/firebase.prod";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
