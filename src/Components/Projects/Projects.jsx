import ProjectsStyle from "./ProjectsStyle";
import SectionTitle from "../SectionTitle/SectionTitle";
import Carrossel from "../Carrossel/Carrossel";

export default function Projects(){
    return(
        <ProjectsStyle>
            <div id="projetos"></div>
            <SectionTitle sectionName="Projects"  title="Escolhi alguns projetos para te mostrar!"/>
            <Carrossel/>
        </ProjectsStyle>
    )
}