import styled, { css } from "styled-components";


export const MenuMobileStyle = styled.section`
    position: sticky;
    backdrop-filter: blur(3px);
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 5;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgb(0,30,255);
    background: linear-gradient(37deg, rgba(0,30,255,0.95) 0%, rgba(0,0,0,0.95) 100%);
    opacity: 0;
    pointer-events: none;


    i{
        position: absolute;
        top: 20px;
        right: 22px;
        font-size: 35px;
        color: white;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 40px;

        a{
            color: white;
            text-decoration: none;
        }
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        display: flex;
    `}
`
export default MenuMobileStyle;