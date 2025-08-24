import "./Start.css"
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import FotoPerfil from '../../../assets/FotoPerfil.jpeg';

export default function Start() {
  return (
    <section className="section-start" id="home">
      <h1 className="description">
        <span className="presentation">
          <Typewriter
            words={['Hello! I am']}
            loop={1}
            typeSpeed={70}
            delaySpeed={500}
          />
        </span>
        <br />
        <span className="name">
          <Typewriter
            words={['Rafael']}
            loop={0}
            cursor = {true}
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </span>
        <p> Desarrollador Full Stack especializado en crear experiencias web modernas y aplicaciones escalables con React, Node.js y tecnologías de vanguardia. </p>
        <p>Mis redes:</p>
        <div className="icons">
          <a href="https://github.com/RafaelCly" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a href="https://www.linkedin.com/in/rafael-chu-lau-357416300" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a href="https://www.instagram.com/tuusuario/" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </h1>
      <img src={FotoPerfil}  alt="fotoperfil" />
    </section>
  );
}
