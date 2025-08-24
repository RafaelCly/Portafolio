import CardMe from "./Components/CardMe"
import "./AboutMe.css"
import { DataMain } from "../data"
import Encabezado from "../Components/Encabezado/Encabezado"

export default function AboutMe() {
  return (
    <section className="section-about" id="about">
      <Encabezado title = {DataMain.AboutMe.title}
        span = {DataMain.AboutMe.span}
        description = {DataMain.AboutMe.description}
      ></Encabezado>
      <div className="cards-me">
        <CardMe 
          title="Desarrollador Full Stack"
          description="Experto en React, Node.js y bases de datos SQL/NoSQL."
          icon="code-slash"
        />
        <CardMe 
          title="Diseño UI/UX"
          description="Creador de interfaces intuitivas y atractivas."
          icon="brush"
        />
        <CardMe 
          title="Automatizacion"
          description="Optimización de procesos con herramientas de automatización."
          icon="cog"
        />
        <CardMe 
          title="Trabajo en equipo"
          description="Habilidades de comunicación y colaboración en equipos ágiles."
          icon="people"
        />
      </div>
    </section>
  )
}


