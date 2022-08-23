import CarrosselStyle from "./CarrosselStyle";
import Container from "./Container";
import ProjectsStyle from "./ProjectsStyle";
import Project from "./Project";
import { useRef } from "react";



function Carrossel(){

    const carrossel = useRef(null);

    const projects = [
        {
            title: "WhatoWatch Movies",
            second_title: "Website",
            description: "Esse é um site de filmes que fiz pra praticar a integração com API, a ideia é ser um site onde pessoas vão pra ver os filmes que estão com maior nota do publico e os que estão populares, caso estejam em duvida do que assistir.",
            image_path: "https://cdn.discordapp.com/attachments/334770078069293056/1011342615683276881/filmes-pronto.png",
            project_link: "https://github.com/AnthonyH30/whatowatch"
        },
        {
            title: "SelfCare Store",
            second_title: "Website",
            description: "Fiz esse projeto para testar meus conhecimentos em React, o usuario deve ser capaz de adicionar e remover produtos no carrinho e ver o preço total a pagar",
            image_path: "https://cdn.discordapp.com/attachments/334770078069293056/1011339928069742602/selfcare-pronto.png",
            project_link: "https://github.com/AnthonyH30/Selfcare-React-version"
        },
        {
            title: "Numeração do dedo",
            second_title: "Website",
            description: "A ideia desse projeto era criar um site onde você coloca o diametro do seu dedo em cm e ele te returna a numeração de anel que você usa! ja que não achei um site que fizesse isso de forma eficiente e automatica.",
            image_path: "https://cdn.discordapp.com/attachments/334770078069293056/1011334653682135150/anel-pronto.png",
            project_link: "https://github.com/AnthonyH30/numero-de-anel"
        }
    ]

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    return(
        <Container>
            <CarrosselStyle>
                <button onClick={handleLeftClick}><i class="fa-solid fa-chevron-left"></i></button>
                <ProjectsStyle ref={carrossel}>
                    {projects.map(project => {
                        return(
                            <Project>

                                <aside>
                                    <h2>{project.title}</h2>
                                    <div>
                                        <div className="box"></div>
                                        <p>{project.second_title}</p>
                                    </div>
                                    <p className="description">{project.description}</p>
                                    <button><a target="_blank" href={project.project_link}>Ver Projeto</a></button>
                                </aside>

                                <figure>
                                    <img src={project.image_path} alt="" />
                                </figure>

                            </Project>
                        )
                    })}
                </ProjectsStyle>
                <button onClick={handleRightClick}><i class="fa-solid fa-chevron-right"></i></button>
            </CarrosselStyle>
        </Container>
    )
}

export default Carrossel;