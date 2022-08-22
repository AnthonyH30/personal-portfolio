import SectionTitle from "../SectionTitle/SectionTitle";
import ContactStyle from "./ContactStyle";


export default function Contact(){
    return(
        <ContactStyle>
            <div id="contato"></div>
            <SectionTitle sectionName="Contato"  title="Interessado em trabalhar comigo ou quem ter uma conversa?"/>
            <div className="container">
                <p>entre em contato comigo pelas redes sociais ou pelo Email: <a href="mailto:anthonyharisson30@gmail.com">anthonyharisson30@gmail.com</a></p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/anthony-harisson-421b50231/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/AnthonyH30"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </ContactStyle>
    )
}