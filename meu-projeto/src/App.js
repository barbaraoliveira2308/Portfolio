import React from "react";
import "./pages/styles.css";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Projetos from "./pages/Projetos";


const MeuComponente = () => {
  return (
    <div className="PaginaInteira">
      <div className="Fundo">
        <NavBar />
        <Card />
    <div>
          <Projetos />
    </div>



        <div className="Espaço">
          Branco

          <div className=" Segunda-Linha">
            <Projetos />



            <Button />
          </div>
        </div>
        </div>
        </div>
        );
};

        export default MeuComponente;
