import styled from "styled-components";

{/* autor: Pedro H. Z. Costa - last update: 12/25/2020 */}

export const ContainerBase = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;

    @media (max-width: 568px) {
        flex-direction: column;
        height: auto;
    }
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;

    @media (max-width: 568px) { 
        width: auto;
        margin-bottom: 4.5vh;
    }
`;

export const ContainerPortuguese = styled.div`
    margin-top: 1.75vh;
    height: 25%;
    width: 87.5%;
    background-image: linear-gradient(#009541 ,#3C3C3C);
    border-radius: 10px;
    border: 0.6vh solid #3C3C3C;
    text-align: center;
    overflow: auto;

    h1 {
        color: #FFCA00;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        margin-inline-start: 0px;
        margin-block-start: 0px;
        margin-top: 3.5px; 
        margin-block-end: 0.3em;
        margin-inline-end: 0px;
    }

    h4 { 
        margin-bottom: 0.4vh;
        margin-inline-start: 0px;
        margin-block-start: 0px; 
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }
`;

export const ContainerEnglish = styled.div`
    margin-top: 1.75vh;
    height: 25%;
    width: 87.5%;
    background-image: linear-gradient(#B22234 ,#3C3C3C);
    border-radius: 10px;
    border: 0.6vh solid #3C3C3C;
    text-align: center;
    overflow: auto;

    h1 {
        color: #3C3B6E;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        margin-inline-start: 0px;
        margin-block-start: 0px;
        margin-top: 3.5px; 
        margin-block-end: 0.3em;
        margin-inline-end: 0px;
    }

    h4 { 
        margin-bottom: 0.4vh;
        margin-inline-start: 0px;
        margin-block-start: 0px; 
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }
`;

export const ContainerC = styled.div`
    margin-top: 1.25vh;
    height: 10%;
    width: 87.5%;
    background-image: linear-gradient(to right, #3C3C3C, #1E1E1E);
    border-radius: 10px;
    border: 0.54vh solid #4481A5;
    text-align: center;

    h4 { 
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
    }

    h5 {
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 4.5vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    h6 {
        font-size: 1.05vw;
        color: #4EC9B0;
        margin-bottom: 4px;
        margin-inline-start: 1vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    img {
        height: 6vh;
        width: 6vh;
        border-radius: 50%;
        margin-top: 0.6vh;
        margin-right: 1.2vh;
        margin-left: 1.2vh;
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h5 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h6 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;

export const ContainerJava = styled.div`
    margin-top: 1.25vh;
    height: 10%;
    width: 87.5%;
    background-image: linear-gradient(to right, #3C3C3C, #1E1E1E);
    border-radius: 10px;
    border: 0.54vh solid #E76F00;
    text-align: center;

    h4 { 
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
    }

    h5 {
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 4.5vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    h6 {
        font-size: 1.05vw;
        color: #4EC9B0;
        margin-bottom: 4px;
        margin-inline-start: 1vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    img {
        height: 6vh;
        width: 6vh;
        border-radius: 50%;
        margin-top: 0.6vh;
        margin-right: 1.2vh;
        margin-left: 1.2vh;
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h5 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h6 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;

export const ContainerJavaScript = styled.div`
    margin-top: 1.25vh;
    height: 10%;
    width: 87.5%;
    background-image: linear-gradient(to right, #3C3C3C, #1E1E1E);
    border-radius: 10px;
    border: 0.54vh solid #CCCCCC;
    text-align: center;

    h4 { 
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
    }

    h5 {
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 4.5vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    h6 {
        font-size: 1.05vw;
        color: #4EC9B0;
        margin-bottom: 4px;
        margin-inline-start: 1vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    img {
        height: 6vh;
        width: 6vh;
        border-radius: 50%;
        margin-top: 0.6vh;
        margin-right: 1.2vh;
        margin-left: 1.2vh;
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h5 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h6 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;

export const ContainerPython = styled.div`
    margin-top: 1.25vh;
    height: 10%;
    width: 87.5%;
    background-image: linear-gradient(to right, #3C3C3C, #1E1E1E);
    border-radius: 10px;
    border: 0.54vh solid #FFD637;
    text-align: center;

    h4 { 
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
    }

    h5 {
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 4.5vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    h6 {
        font-size: 1.05vw;
        color: #4EC9B0;
        margin-bottom: 4px;
        margin-inline-start: 1vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    img {
        height: 6vh;
        width: 6vh;
        border-radius: 50%;
        margin-top: 0.6vh;
        margin-right: 1.2vh;
        margin-left: 1.2vh;
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h5 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h6 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;

export const ContainerGit = styled.div`
    margin-top: 1.25vh;
    height: 10%;
    width: 87.5%;
    background-image: linear-gradient(to right, #3C3C3C, #1E1E1E);
    border-radius: 10px;
    border: 0.54vh solid #F05033;
    text-align: center;

    h4 { 
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
    }

    h5 {
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 4.5vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    h6 {
        font-size: 1.05vw;
        color: #4EC9B0;
        margin-bottom: 4px;
        margin-inline-start: 1vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    img {
        height: 6vh;
        width: 6vh;
        border-radius: 50%;
        margin-top: 0.6vh;
        margin-right: 1.2vh;
        margin-left: 1.2vh;
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h5 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h6 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;

export const ContainerExperience = styled.div`
    margin-top: 1.25vh;
    height: 25%;
    width: 87.5%;
    background-image: linear-gradient(#1E1E1E ,#3C3C3C, #1E1E1E);
    border-radius: 10px;
    border: 0.6vh solid #CCCCCC;
    text-align: center;
    overflow-y: auto;

    h4 { 
        font-size: 1.04vw;
        margin-block-end: -8px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }

    @media (max-width: 568px) {
        h4 { font-size: 2.8vw; }
    }
`;

export const ContainerReactJs = styled.div`
    margin-top: 1.25vh;
    height: 8%;
    width: 87.5%;
    background-image: linear-gradient(to right, #1397BF ,#3C3C3C);
    border-radius: 10px;
    border: 0.5vh solid #3C3C3C;
    text-align: center;

    h4 { 
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 1.7vh;
    }

    img {
        height: 5.5vh;
        width: 5.5vh;
        border-radius: 50%;
        margin-top: 0.5vh;
        margin-right: 1vh;
        margin-left: 1vh;
    }

    :hover { box-shadow:  0 0 15px #FFFFFF; }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;
