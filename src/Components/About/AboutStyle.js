import styled from "styled-components";


export const AboutStyle = styled.section`
    background-color: #141628;
    padding-top: 80px;
    padding-bottom: 30px;
    color: white;
    min-height: calc(100vh - 80px);


    div{
        display: flex;
        align-items: center;
        gap: 10px;


        .box-habilidades{
            width: 30px;
            height: 5px;
            background-color: #001eff;
            border-radius: 8px;
            margin-left: 13%;
        }

        h2{
            font-size: 14px;
            font-weight: 400;
        }
    }

    p{
        font-size: 20px;
        margin-left: 13%;
    }

    .about-me{
        margin-top: 40px;
    }

    .description{
        font-size: 18px;
        max-width: 700px;
    }

    .description:last-child{
        margin-bottom: 20px;
        margin-top: 10px;
    }

        a{
            color: white;
            text-decoration: none;
        }

        button.btn-contato{
            width: 110px;
            height: 40px;
            background-color: #001eff;
            margin-block: 10px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            margin-left: 13%;
        }

        @media(max-width: 768px){
        .description{
            max-width: 300px;
        }
        }
`

export default AboutStyle;