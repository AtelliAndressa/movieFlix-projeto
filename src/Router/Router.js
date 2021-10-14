import React from "react";
//aqui vai todos os componentes importados pra cá de paginas

import Login from "../Pages/Login/Login";
import Checkout from "../Pages/Checkout/Checkout";
import Product from "../Pages/Product/Product";
import Movies from "../Pages/Movies/Movies";
import History from "../Pages/History/History";

//todo componente precisa ter letra maiuscula

const Router = [
  {
    name: "Movies",
    Component: Product,
    path: "/movies/:id",
    isVisible: true,
    isPrivate: true,
  },
  {
    name: "Movies",
    Component: Movies,
    path: "/movies",
    isVisible: true,
    isPrivate: true,
  },

  {
    name: "Checkout",
    Component: Checkout,
    path: "/checkout",
    isVisible: true,
    isPrivate: true,
  },

  {
    name: "HistoricoCompras",
    Component: History,
    path: "/historicoCompras",
    isVisible: true,
    isPrivate: true,
  },
  {
    name: "Login",
    Component: Login,
    path: "/",
    isVisible: true,
    isPrivate: false,
  },
];

export default Router;
