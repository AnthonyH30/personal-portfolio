import SectionTitleStyle from "./SectionTitleStyle"

export default function SectionTitle(props){
    return(
        <SectionTitleStyle>
            <div>
                <div className="box"></div>
                <h2>{props.sectionName}</h2>
            </div>
            <h3>{props.title}</h3>
        </SectionTitleStyle>
    )
}