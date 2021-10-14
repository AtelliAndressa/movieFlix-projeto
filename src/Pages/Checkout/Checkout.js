import Navbar from "../../Components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";
import { StyledContainerCheckout, StyledChekout } from "./Checkout.styled";
import "./Checkout.css";

//pagina vê os filmes adicionados no carrinho

export default function Checkout() {
  const { cart, removeMovieCart, addHistoricoCompras } = useContext(MyContext);

  const [total, setTotal] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setTotal((prevState) => {
      let soma = 0;
      cart.forEach((element) => {
        soma = Number(element.vote_average) * 10 + soma;
      });
      return soma.toFixed(2);
    });
  }, [cart]);

  const SalvarHistoricoCompras = () => {
    addHistoricoCompras();
    history.push("/historicoCompras");
  };

  console.log(cart);

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />
        <h1>Sem itens no carrinho</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <StyledContainerCheckout>
        <StyledChekout>
          <h2>Incluídos no Carrinho</h2>
          {cart.map((element) => (
            <div className="checkoutCard" key={element.id}>
              <div>
                 <img
                      src={
                        element.poster_path === null
                          ? "/img/sem-foto.jpg"
                          : "https://image.tmdb.org/t/p/w45" +
                            element.poster_path
                      } 
                    />
                  </div>
              <div className="elementTitle">
              <span>{element.title}</span>
              <span>
                {"R$ " + (Number(element.vote_average) * 10).toFixed(2)}
              </span>
              </div>
              <div>
                <button onClick={() => removeMovieCart(element.id)}>
                  Remover
                </button>
              </div>
            </div>
          ))}
          
          <div className="containerButton">
          <span>Total: R$ {total}</span>
          <button onClick={SalvarHistoricoCompras}>Finalizar</button>
          </div>
        </StyledChekout>
      </StyledContainerCheckout>
    </div>
  );
}
