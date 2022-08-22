import styled from "styled-components";

export const Project = styled.div`
    width: 100%;
    background-color: #1b1e32;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 5%;
    flex: none;


    aside{

        max-width: 320px;

        div{
            display: flex;
            gap: 10px;
            align-items: center;
            margin-block: 20px;

            p{
                font-weight: bold;
                font-size: 20px;
            }

            .box{
            width: 30px;
            height: 5px;
            background-color: #001eff;
            border-radius: 8px;
            }

        }

        a{
            color: white;
            text-decoration: none;
        }

        button{
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
        }


}

    figure img{
            width: 300px;
        }


        @media(max-width: 768px){
            flex-direction: column;
            gap: 20px;
        }

`
export default Project;