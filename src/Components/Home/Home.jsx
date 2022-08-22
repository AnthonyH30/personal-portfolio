import { HomeStyle } from "./HomeStyle"
import image from "../../img/eu.png"

export default function Home(){
    return(
        <HomeStyle>
            <aside>
                <h1>Olá, eu sou o Anthony</h1>
                <h2>Sou Desenvolvedor Front End</h2>
                <p>Continue vendo para conferir alguns projetos.</p>
                <button><a href="#projetos">Ver Projetos</a></button>
            </aside>
            <figure>
                <img id="home" src={image} alt="imagem da seção home" />
            </figure>
        </HomeStyle>
    )
}