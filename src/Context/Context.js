import { createContext, useState } from 'react';

//variavel que está em todo site = carrinho modo escopo global
//criando contexto para providenciar ele (cabeçalho), como se fosse um extend de uma classe pai
//children vai ser a rota 

export const MyContext = createContext();

// criando função provider
export default function CartProvider({ children }) {
    
    const [ cart, setCart ] = useState(localStorage.cartList === undefined ? [] : JSON.parse(localStorage.getItem("cartList"))); 
    const [ historicoCompras, setHistoricoCompras ] = useState(localStorage.historicoCompras === undefined ? [] : JSON.parse(localStorage.getItem("historicoCompras")));
    const [ userAutentic, setUserAutentic] = useState(false);
    const [ carregamento, setCarregamento ] = useState(false);

    const addMovieCart = (movie) => {
        console.log("movie", movie)
        setCart((prevState) => {
            
            if(prevState.find((mov) => mov.id === movie.id)){
                return prevState;
            }
           
            const concatMovie = prevState.concat(movie);
            localStorage.setItem('cartList', JSON.stringify(concatMovie));
            return concatMovie;
        } )
    }
 
    const addHistoricoCompras = () => {
       
            let soma = 0;
            cart.forEach((element) => {
              soma = Number(element.vote_average) * 10 + soma;
            });
          
          
        const orderList = localStorage.historicoCompras === undefined ? [] : JSON.parse(localStorage.getItem("historicoCompras"))
        const numeroCompras = (parseInt(Math.random() * 1000) + 1000)
        orderList.push({
            numeroCompra: numeroCompras,
            movies: cart, //listagem de todos os filmes do carrinho por ordem
            totalCompra: soma
        })

        setHistoricoCompras((prevState) => prevState.concat({ numeroCompra: numeroCompras,
            movies: cart, totalCompra: soma}))
        localStorage.setItem('historicoCompras', JSON.stringify(orderList))
        localStorage.setItem('cartList', "[]")
        setCart([]);

    }

    const removeMovieCart = ((id) => {
        setCart((prevState) => {
            const filterMov =  prevState.filter((mov) => mov.id !== id )
            localStorage.setItem('cartList', JSON.stringify(filterMov));
            return filterMov;
        })
    })
    return (
        <MyContext.Provider value={
           { addMovieCart,
            removeMovieCart,
            addHistoricoCompras,
            setUserAutentic,
            setCarregamento,
            carregamento,
            cart,
            historicoCompras,
            userAutentic
         }
        }>
            { children }
        </MyContext.Provider>
    )
}

