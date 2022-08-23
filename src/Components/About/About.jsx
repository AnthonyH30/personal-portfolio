import SectionTitle from "../SectionTitle/SectionTitle";
import AboutStyle from "./AboutStyle";


export default function About(){
    return(
        <AboutStyle>
            <div id="sobre"></div>
            <SectionTitle sectionName="Sobre" title="Confira as minhas habilidades"/>
            <div>
                <div className="box-habilidades"></div>
                <h2>Tecnologias e Habilidades</h2>
            </div>
            <p>HTML, CSS, JavaScript, ReactJS, Styled Components, Git, SEO, Inglês(internediário)</p>

            <div className="about-me">
                <div className="box-habilidades"></div>
                <h2>Sobre mim</h2>
            </div>
            <p className="description">Me chamo Anthony, sou um jovem de 21 anos apaixonado por tecnologia desde quando ainda estava na escola, sempre tive curiosidade de saber como as coisas eram feitas, sites, jogos, etc.</p>
            <p className="description">Em 2021 decidi transformar essa paixão em profissão, e desde então tenho me dedicado a aprender desenvolvimento web, tenho muito a aprender ainda, e isso me deixa ainda mais animado para continuar!</p>
            <button className="btn-contato"><a href="#contato">Contato</a></button>
        </AboutStyle>
    )
}