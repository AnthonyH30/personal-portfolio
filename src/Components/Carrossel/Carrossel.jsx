import CarrosselStyle from "./CarrosselStyle";
import Container from "./Container";
import ProjectsStyle from "./ProjectsStyle";
import Project from "./Project";
import { useRef } from "react";



function Carrossel(){

    const carrossel = useRef(null);

    const projects = [
        {
            title: "Primeiro Projeto",
            second_title: "Website",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image_path: "https://madewithreact.com/assets/img/react-light-bootstrap-dashboard-pro.jpg?v=1f2ec887e3",
            project_link: ""
        },
        {
            title: "Segundo Projeto",
            second_title: "Website",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image_path: "https://madewithreact.com/assets/img/react-light-bootstrap-dashboard-pro.jpg?v=1f2ec887e3",
            project_link: ""
        },
        {
            title: "Terceiro Projeto",
            second_title: "Website",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image_path: "https://madewithreact.com/assets/img/react-light-bootstrap-dashboard-pro.jpg?v=1f2ec887e3",
            project_link: ""
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
                                    <button><a href={project.project_link}>Ver Projeto</a></button>
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