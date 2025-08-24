import ProjectIzquierda from './ProjectIzquierda/ProjectIzquierda'
import ProjectDerecha from './ProjectDerecha/ProjectDerecha'
import "./Projects.css"
import FotoPerfil from "../../../assets/FotoPerfil.jpeg"
import { DataMain } from '../data'
import Encabezado from '../Components/Encabezado/Encabezado'

export default function Projects() {
  return (
    <div className="container-projects" id="projects">
        <Encabezado title = {DataMain.Projects.title}
            span = {DataMain.Projects.span}
            description = {DataMain.Projects.description}
        ></Encabezado>,
        <section className="section-projects">
        <ProjectIzquierda 
            titulo="Proyecto Destacado"
            descripcion="Plataforma de análisis de datos con visualizaciones interactivas, métricas en tiempo real y reportes personalizables."
            tecnologias={["React", "Node.js", "CSS"]}
            linkProyecto="https://example.com/proyecto"
            linkCodigo= ""
            imagen = {FotoPerfil}>
        </ProjectIzquierda>
        <ProjectDerecha
            titulo="Proyecto Secundario"
            descripcion="Aplicación móvil para gestión de tareas con notificaciones, integración en la nube y colaboración en equipo."
            tecnologias={["React Native", "Firebase", "Expo"]}
            linkProyecto="https://example.com/proyecto2"
            linkCodigo= ""
            imagen = {FotoPerfil}>
        </ProjectDerecha>
        </section>
    </div>
  );
};