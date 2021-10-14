import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import Img from "../../Img/logo.png";
import ImgCart from "../../Img/cart.png";
import ImgUser from "../../Img/user2.png";
import ImgHistory from "../../Img/historico.png"
import {
  StyledNavbar,
  StyleCartLogin,
  StyledTextNavbar,
} from "./Navbar.styled";
import Router from "../../Router/Router";
import { Link, useHistory } from "react-router-dom";


export default function Navbar() {
  //carrinho sincronizado com o contexto
  const { cart, addMovieCart } = useContext(MyContext);

  const history = useHistory();

  const mudarRota = (routes) => {
    history.push(routes)
  }



  //mostrando o slogan, o icone do carrinho e usuario
  //se o carrinho for maior que zero mostra os produtos
  return (
    <StyledNavbar>
      <img src={Img} onClick={() => mudarRota("/movies")} />
      
      <StyleCartLogin>
        <img src={ImgCart} onClick={() => mudarRota("/checkout")}/>
        {cart.length > 0 ? <div>{cart.length}</div> : null}
        <img src={ImgHistory} onClick={() => mudarRota("/historicoCompras")}/>
        <img src={ImgUser} />
        
      </StyleCartLogin>
    </StyledNavbar>
  );
}
