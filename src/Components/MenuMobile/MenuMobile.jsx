import { useEffect } from "react"
import MenuMobileStyle from "./MenuMobilestyle"


export function MenuMobile({menuIsVisible , setMenuIsVisible}){
    
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
    }, [menuIsVisible]);
    
    return(
        <MenuMobileStyle isVisible={menuIsVisible}>
            <i class="fa-solid fa-times" onClick={() => {setMenuIsVisible(false)}}></i>
            <nav>
                <a onClick={() => {setMenuIsVisible(false)}} href="#projetos">Projetos</a>
                <a onClick={() => {setMenuIsVisible(false)}} href="#sobre">Sobre</a>
                <a onClick={() => {setMenuIsVisible(false)}} href="#contato">Contato</a>
            </nav>
        </MenuMobileStyle>
    )
}