import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import Routes from "./Router/index";
import CartProvider from "./Context/Context";
//import { ChakraProvider } from "@chakra-ui/react";

//renderizando o componente rotas pra escopo global

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
        <Routes />
      </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
