import "./Skills.css"
import Encabezado from "../Components/Encabezado/Encabezado"
import { DataMain } from "../data"
import { Frontend, Backend, Herramientas } from "../data";
import CardSkills from "./CardSkills/CardSkills";

export default function Skill() {
    return (
        <div className="skills" id="skills">
            <div className="cont-skills">
                <Encabezado title={DataMain.Skills.title} span={DataMain.Skills.span}
                description={DataMain.Skills.description} />
            </div>
            <section className="skills-section">
                <CardSkills title="Frontend" skills={Frontend} />
                <CardSkills title="Backend" skills={Backend} />
                <CardSkills title="Herramientas" skills={Herramientas} />
            </section>
        </div>
    )
}