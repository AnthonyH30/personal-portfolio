
import HeaderStyle from "./HeaderStyle"
import logo from "../../img/logo.png"

export function Header({setMenuIsVisible}){
    return(
        <HeaderStyle>
            <a href="#home"><img src={logo} alt="" /></a>
            <nav>
                <ul>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            <i class="fa-solid fa-bars" onClick={() => {setMenuIsVisible(true)}}></i>
        </HeaderStyle>
    )
}

export default Header;