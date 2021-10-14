import Navbar from "../../Components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/Context";
import AccordionHistory from "../../Components/Accordion/Accordion";

export default function HistoricoCompras() {
  const { cart, addHistoricoCompras, historicoCompras } = useContext(MyContext);

  if (historicoCompras.length === 0) {
    return (
      <div>
        <Navbar />
        <h1>Sem histórico de compras</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <AccordionHistory />
    </>
  );
}
