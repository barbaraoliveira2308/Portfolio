import React from "react";
import image from '../img/image.jpeg';
import GitHub from '../img/GitHub.png';
import "../pages/styles.css";
import Linkedin from '../img/Linkedin.png';

const img = image; // Corrija a declaração da variável img


function Card() {
  return (
    <div className="Card">
      <img className="Foto" src={img} alt="Barbara" />
      <h1>Barbara Moreira</h1>
      <p className="title">Full Stack Developer</p> {/* Use className em vez de class para evitar conflitos */}


      <a href="https://github.com/barbaraoliveira2308">
        <img className="Git" src={GitHub} />
        <i className="Git Hub"></i>
      </a>
     
      <a href="https://www.linkedin.com/in/barbara-oliveira23/">
        <i className="Linkedin"></i>
        <img className="Linkedin" src={Linkedin} />

      </a>

      <p className="Texto-Animado">
       Aprender a animar 
      </p>

    </div>
  );
};

export default Card