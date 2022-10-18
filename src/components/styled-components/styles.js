import styled from "styled-components";

{/* autor: Pedro H. Z. Costa - last update: 10/11/2022 */}

export const ContainerBase = styled.div`
    display: flex;
    justify-content: space-around;
    height: 200vh;

    @media (max-width: 568px) {
        flex-direction: column;
        height: auto;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    a:visited {
        text-decoration: none;
        color: #FFFFFF;
    }
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 568px) { 
        width: auto;
        margin-bottom: 4.5vh;
    }

    h5 {
        font-size: 1.05vw;
        color: #9AA0A6;
        textShadow: "-1px 0 #101214, 0 1px #101214, 1px 0 #101214, 0 -1px #101214";

        :hover {
            color: #FA5454;
            cursor: pointer;
        }
    }
`;

export const HomeImage = styled.img`
    width: 15vw;
    height: auto;
    margin: 3.75vh;

    :hover {
        -webkit-filter: drop-shadow(0px 0px 10px #FA5454);
		cursor: pointer;
    }

    @media (max-width: 568px) { 
        width: 30vw;
        height: auto;
    }
`;

export const HeaderContainer = styled.div`
    margin-top: 6.25vh;
    margin-bottom: 0.5vh;
    height: 25vh;
    width: 87.5%;
    background-color: #1F2022;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    overflow: auto;

    h1 {
        color: #FA2A2A;
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

    h5 {
        margin-bottom: 0.4vh;
        margin-inline-start: 0px;
        margin-block-start: 0px;
        font-size: 1.05vw;
        color: #FFFFFF;
        :hover {
            color: #FA5454;
            cursor: pointer;
        }
    }

    @media (max-width: 568px) { 
        height: 35vh;
        h5 { font-size: 5vw; }
    }
`;

export const InterestsContainer = styled.div`
    margin-top: 2.5vh;
    margin-bottom: 0.5vh;
    height: 10vh;
    width: 87.5%;
    background-color: #1F2022;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    h4 {
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 #101214, 0 1px #101214, 1px 0 #101214, 0 -1px #101214; 

        :hover {
            color: #FA5454;
            cursor: pointer;
        }
    }

    h5 {
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 4.5vh;
        margin-block-start: 2.3vh;
        font-weight: normal;
        text-align: center;
    }

    img {
        height: 7.75vh;
        width: 7.75vh;
        margin-right: 1.2vh;
        margin-left: 1.2vh;
    }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }

        h5 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;

export const ExperienceContainer = styled.div`
    margin-top: 2.5vh;
    margin-bottom: 8.75vh;
    height: 30vh;
    width: 87.5%;
    background-color: #1F2022;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    overflow-y: auto;

    h4 {
        font-size: 1.04vw;
        margin-block-end: -8px;
        margin-inline-start: 1.5vh;
        margin-block-start: 2.3vh;
        text-shadow: -1px 0 #101214, 0 1px #101214, 1px 0 #101214, 0 -1px #101214; 

        :hover {
            color: #FA5454;
            cursor: pointer;
        }
    }

    @media (max-width: 568px) {
        h4 { font-size: 2.8vw; }
    }

    ::-webkit-scrollbar { background: #1F2022; }
    ::-webkit-scrollbar-thumb { background: #303134; }
`;

export const ReactJsContainer = styled.div`
    margin-top: 3.75vh;
    margin-bottom: 15vh;
    height: 8vh;
    width: 87.5%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    h4 { 
        color: #61DAFB;
        font-size: 1.05vw;
        margin-bottom: 4px;
        margin-inline-start: 1.5vh;
        margin-block-start: 1.7vh;
    }

    img {
        height: 7.25vh;
        width: 7.25vh;
        margin-right: 1vh;
        margin-left: 1vh;
    }

    @media (max-width: 568px) {
        h4 {
            font-size: 2.10vw;
            margin-bottom: 2px;
        }
    }
`;
