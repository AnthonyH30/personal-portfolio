import styled from "styled-components";


export const HomeStyle =styled.section`
    background-color: #141628;
    margin-top: 80px;
    min-height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;

    aside{
        width: 500px;
        text-align: justify;


        h1{
            font-size: 35px;
        }

        h2{
            margin-bottom: 30px;
        }

        p{
            margin-bottom: 20px;
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
        flex-direction: column-reverse;
        gap: 30px;

        aside{
            width: 300px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;

        h1{
            font-size: 25px;
        }

        h2{
            margin-bottom: 20px;
        }

        p{
            margin-bottom: 15px;
        }
        }


        figure img{
            width: 300px;
            padding-top: 30px;
        }
    }
`