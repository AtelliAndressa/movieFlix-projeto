import "./Accordion.css";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";

export default function AccordionHistory() {
  const { historicoCompras } = useContext(MyContext);

  function acordion(props) {
    console.log(props);
    props.target.classList.toggle("active");
    const accordionPanel = props.target.nextSibling;
    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  }

  return (
    <>
      <div >
        <div className="tituloHistorico">Histórico de Compras</div>
        {historicoCompras.map((element) => {
          return (
            <div className="containerAcordion" key={element.numeroCompra}>

              <button onClick={acordion} className="accordion">
                
              Numero da Compra: {element.numeroCompra} &nbsp; &nbsp; &nbsp; &nbsp; 
              Total R$ {element.totalCompra.toFixed(2)}
              </button>
              <div className="panel">

                {element.movies.map((element) => (
                  
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
                     
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
