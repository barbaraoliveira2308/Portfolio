import React from "react";
import "../pages/styles.css"; 

// Função para lidar com o clique do botão
const handleButtonClick = () => {
  console.log("Botão Confirmar foi clicado!");
};

function Button() {
  return (
    <div >
      <button className="Button" onClick={handleButtonClick}>Confirmar</button>
    </div>
  );
}

export default Button;
