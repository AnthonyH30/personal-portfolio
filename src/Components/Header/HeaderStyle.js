import styled from "styled-components";


export const HeaderStyle = styled.header`
    background-color: #141628;
    width: 100%;
    height: 80px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 3%;
    position: fixed;
    top: 0;

    img{
        width: 80px;
    }

    nav ul{
        display: flex;
        gap: 40px;
        list-style: none;

        a{
            text-decoration: none;
            color: white;
            font-size: 15px;
        }

        li{
            transition: all ease-in 0.2s;
        }

        li:hover{
            transform: scale(1.05);
        }
    }

    i{
        display: none;
    }

    @media(max-width:768px){
        
        nav{
            display: none;
        }
        
        i{
            display: initial;
            font-size: 35px;
        }
    }
`

export default HeaderStyle;