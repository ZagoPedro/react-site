import React from "react";
import { Link } from "react-router-dom";
import { ContainerBase, ContainerRow, ContainerColumn, HeaderContainer, InterestsContainer, ExperienceContainer, ReactJsContainer } from "../components/styled-components/styles";
import Chart from "../components/chart";

{/* autor: Pedro H. Z. Costa - last update: 10/11/2022 */}

const Portugues = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <HeaderContainer>
                        <h1> Olá, eu sou o Pedro Zago! </h1>
                        <h4> Sou um estudante de Ciência da Computação de 22 anos. </h4>
                        <h4> e-mail: pedro_zago.costa@terra.com.br </h4>
                        <a href = "https://github.com/ZagoPedro" target = "_blank">
                            <h5> GitHub: github.com/ZagoPedro </h5> </a>
                    </HeaderContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image1.png" } alt = "ReactJS e JavaScript clássico"/>
                            <a href = "https://www.google.com/search?q=react+js&hl=pt-BR&source=hp&ei=nIRFY-iFL8vV1sQPgoeomAw&iflsig=AJiK0e8AAAAAY0WSrIE4Nvxo9JF8C8rueGPvzgOC4dN1&oq=react&gs_lp=Egdnd3Mtd2l6uAED-AEBKgIIAzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARjUAsICERAuGIAEGLEDGIMBGMcBGNEDwgILEC4YgAQYsQMY1ALCAgUQABiABMICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgUQLhiABEi5KFAAWIoVcAB4AMgBAJABAJgBkQGgAeYEqgEDMC41&sclient=gws-wiz" target = "_blank">
                                <h4> ReactJs e JavaScript Clássico: </h4> </a>
                            <h5> atualmente estudando com interesse em desenvolvido web. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image2.png" } alt = "Python"/>
                            <a href = "https://www.google.com/search?q=python&hl=pt-BR&ei=pYRFY7K0Fv7V1sQPzpSpoAw&ved=0ahUKEwjympGauNj6AhX-qpUCHU5KCsQQ4dUDCA4&uact=5&oq=python&gs_lp=ugYGCAEQARgJugYGCAIQARgIEgdnd3Mtd2l6uAED-AEBMgoQABixAxiDARhDMgsQABiABBixAxiDATIEEAAYQzIIEAAYgAQYsQMyBBAAGEMyBRAAGIAEMgQQABhDMgoQABixAxiDARhDMgsQABiABBixAxiDATIEEAAYQ8ICChAAGEcY1gQYsAPCAgcQABiwAxhDwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhjHARjRAxjIAxiwAxhD2AECwgIREAAYjwEYjwEY6gIYjAMY5QLCAgsQLhiABBixAxiDAagCCpAGEUi9KlCbC1inJ3ADeAHIAQCQAQSYAbYBoAG2DKoBBDAuMTLiAwQgTRgB4gMEIEEYAOIDBCBGGAGIBgE&sclient=gws-wiz" target = "_blank">
                                <h4> Python: </h4> </a>
                            <h5> atualmente estudando com interesse de propósitos gerais. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image3.png" } alt = "Robot Framework"/>
                            <a href = "https://www.google.com/search?q=robot+framework&hl=pt-BR&ei=94RFY6foLLvN1sQPnc-0MA&oq=robot&gs_lp=ugYGCAEQARgJugYGCAIQARgIEgdnd3Mtd2l6uAED-AEBKgIIADIKEAAYsQMYgwEYQzIEEAAYQzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgQQABhDMgQQABhDMgsQABiABBixAxiDATIIEAAYgAQYsQMyBBAAGEMyCBAAGLEDGIMBwgIKEAAYRxjWBBiwA8ICBxAAGLADGEPCAg4QABjkAhjWBBiwA9gBAcICExAuGMcBGNEDGMgDGLADGEPYAQLCAhAQLhjUAhjIAxiwAxhD2AECwgIHEAAYsQMYQ8ICBRAAGIAEwgIREAAYjwEYjwEY6gIYjAMY5QLCAgoQLhjHARjRAxhDwgIOEC4YgAQYsQMYgwEY1ALCAgcQLhjUAhhDwgINEC4YsQMYgwEY1AIYQ8ICBBAuGEPCAhEQLhiABBixAxiDARjHARivAcICCxAuGIAEGLEDGNQCwgILEC4YgAQYsQMYgwGoAgqQBhJIwCNQtAdYvxlwAngByAEAkAEDmAGLAaABuwmqAQQwLjEw4gMEIE0YAeIDBCBBGADiAwQgRhgBiAYB&sclient=gws-wiz" target = "_blank">
                                <h4> Robot Framework: </h4> </a>
                            <h5> atualmente estudando com interesse em automatização de testes de software. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image4.png" } alt = "Git"/>
                            <a href = "https://www.google.com/search?q=git&hl=pt-BR&ei=OoVFY9TbBuvc1sQPyLehuA0&ved=0ahUKEwjU4IfhuNj6AhVrrpUCHchbCNcQ4dUDCA4&uact=5&oq=git&gs_lp=ugYGCAEQARgJugYGCAIQARgIEgdnd3Mtd2l6uAED-AEBMg4QLhiABBixAxjHARjRAzIKEAAYsQMYgwEYQzIEEAAYQzIKEAAYsQMYgwEYQzIKEAAYsQMYgwEYQzIKEAAYsQMYgwEYQzIKEAAYsQMYgwEYQzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgoQABixAxiDARhDwgIKEAAYRxjWBBiwA8ICBxAAGLADGEPCAg4QABjkAhjWBBiwA9gBAcICEBAuGNQCGMgDGLADGEPYAQLCAgUQABiABMICERAAGI8BGI8BGOoCGIwDGOUCwgIREC4YjwEYjwEY6gIYjAMY5QLCAhAQLhixAxiDARjHARjRAxhDwgILEC4YgAQYxwEY0QPCAg0QLhixAxjHARjRAxhDqAIKkAYRSNgeUPwHWL0bcAJ4AcgBAJABBJgByAGgAeYPqgEGMC4xMy4x4gMEIE0YAeIDBCBBGADiAwQgRhgBiAYB&sclient=gws-wiz" target = "_blank">
                                <h4> Git </h4> </a>
                            <h5> atualmente estudando com interesse de melhorar meu uso do GitHub. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <h4> Outros tópicos de meu interesse: </h4>
                            <h5> Front-End, UI/UX Design, Design Gráfico, Testes de Software. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <ExperienceContainer>
                        <h4 style = {{color: "#FA5454"}}> Experiência: </h4>
                        <a href = "https://www.fct.unesp.br" target = "_blank">
                            <h4> • atualmente estudando Ciência da Computação na FCT - Faculdade de Ciências e Tecnologia - UNESP (desde março de 2018). </h4> </a>
                        <a href = "https://www.ejcomp.com.br" target = "_blank">
                            <h4> • trabalhei na EJComp - Empresa Júnior de Computação (01/04/2020 - 12/04/2021). </h4> </a>
                        <a href = "http://www.presidenteprudente.sp.gov.br/site/unidade.xhtml?cod=1" target = "_blank">
                            <h4> • trabalhei para a  prefeitura de Presidente Prudente, no Laboratório de Testes de Software, localizado na Fundação Inova Prudente (19/11/2020 - 30/09/2022). </h4> </a>
                        <h4> <br/> </h4>
                    </ExperienceContainer>
                    <Chart/>
                    <ReactJsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image9.gif" } alt = "ReactJs"/>
                            <h4> Este site foi desenvolvido usando ReactJs. </h4>
                        </ContainerRow>
                    </ReactJsContainer>
                    <Link to = "/english" style = {{ textDecoration: "none" }}>
                        <h5> switch to English </h5>
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};

export default Portugues;