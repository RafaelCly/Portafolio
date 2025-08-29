import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footerr">
      <div className="foot1">
        <div className="footer-1">
            <h3>Rafael Portfolio</h3>
            <p>Desarrollador Full Stack | UI/UX Designer | Automatización</p>
        </div>
        <div className="footer-2">
            <h3>Navegación Rápida</h3>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre Mí</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
        <div className="footer-3">
            <h3>Trabajemos juntos</h3>
            <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <a href="#contact" className="btn-contact">Contáctame <ion-icon name="chevron-forward-outline"></ion-icon></a>
        </div>
      </div>
      <div className="foot2">
        <p>&copy; 2024 Rafael Portfolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}