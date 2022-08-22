import styled from "styled-components";

export const ContactStyle = styled.section`
    background-color: #1b1e32;
    color: white;

    div.container{
        margin-left: 13%;
        max-width: 500px;
    }

    a{
        color: white;
    }

    .social{
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding-block: 30px;
    }

    .social i{
        font-size: 30px;
        transition: 0.2s all ease-in;
    }

    .social i:hover{
        transform: scale(1.1);
    }
`

export default ContactStyle;