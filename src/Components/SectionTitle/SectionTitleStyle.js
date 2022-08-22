import styled from "styled-components";


export const SectionTitleStyle = styled.section`
    margin-left: 13%;
    color: white;
    padding-block: 30px;
    width: 500px;
    margin-bottom: 50px;

    div{
        display: flex;
        align-items: center;
        gap: 10px;


        .box{
            width: 60px;
            height: 5px;
            background-color: #001eff;
            border-radius: 8px;
        }

        h2{
            font-size: 14px;
            font-weight: 400;
        }
    }

    h3{
        margin-top: 25px;
        font-size: 30px;
        font-weight: 500;
    }

    @media(max-width: 768px){
        width: 300px;

        h3{
            font-size: 20px;
        }
    }
`

export default SectionTitleStyle;