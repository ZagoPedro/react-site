import React from "react";
import { Link } from "react-router-dom";
import { ContainerBase, ContainerRow, ContainerColumn, HeaderContainer, InterestsContainer, ExperienceContainer, ReactJsContainer } from "../components/styled-components/styles";
import Chart from "../components/chart";

{/* autor: Pedro H. Z. Costa - last update: 10/11/2022 */}

const English = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <HeaderContainer>
                        <h1> Hello, I am Pedro Zago! </h1>
                        <h4> I am a 22 y.o. Computer Science student! </h4>
                        <h4> e-mail: pedro_zago.costa@terra.com.br </h4>
                        <a href = "https://github.com/ZagoPedro" target = "_blank">
                            <h5> GitHub: github.com/ZagoPedro </h5> </a>
                    </HeaderContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image1.png" } alt = "ReactJS and classic JavaScript"/>
                            <a href = "https://www.google.com/search?q=react+js&hl=pt-BR&source=hp&ei=nIRFY-iFL8vV1sQPgoeomAw&iflsig=AJiK0e8AAAAAY0WSrIE4Nvxo9JF8C8rueGPvzgOC4dN1&oq=react&gs_lp=Egdnd3Mtd2l6uAED-AEBKgIIAzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARjUAsICERAuGIAEGLEDGIMBGMcBGNEDwgILEC4YgAQYsQMY1ALCAgUQABiABMICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgUQLhiABEi5KFAAWIoVcAB4AMgBAJABAJgBkQGgAeYEqgEDMC41&sclient=gws-wiz" target = "_blank">
                                <h4> ReactJS and classic JavaScript: </h4> </a>
                            <h5> currently studying with interest in web development. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image2.png" } alt = "Python"/>
                            <a href = "https://www.google.com/search?q=python&hl=pt-BR&ei=pYRFY7K0Fv7V1sQPzpSpoAw&ved=0ahUKEwjympGauNj6AhX-qpUCHU5KCsQQ4dUDCA4&uact=5&oq=python&gs_lp=ugYGCAEQARgJugYGCAIQARgIEgdnd3Mtd2l6uAED-AEBMgoQABixAxiDARhDMgsQABiABBixAxiDATIEEAAYQzIIEAAYgAQYsQMyBBAAGEMyBRAAGIAEMgQQABhDMgoQABixAxiDARhDMgsQABiABBixAxiDATIEEAAYQ8ICChAAGEcY1gQYsAPCAgcQABiwAxhDwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhjHARjRAxjIAxiwAxhD2AECwgIREAAYjwEYjwEY6gIYjAMY5QLCAgsQLhiABBixAxiDAagCCpAGEUi9KlCbC1inJ3ADeAHIAQCQAQSYAbYBoAG2DKoBBDAuMTLiAwQgTRgB4gMEIEEYAOIDBCBGGAGIBgE&sclient=gws-wiz" target = "_blank">
                                <h4> Python: </h4> </a>
                            <h5> currently studying with interest in general purposes. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image3.png" } alt = "Robot Framework"/>
                            <a href = "https://www.google.com/search?q=robot+framework&hl=pt-BR&ei=94RFY6foLLvN1sQPnc-0MA&oq=robot&gs_lp=ugYGCAEQARgJugYGCAIQARgIEgdnd3Mtd2l6uAED-AEBKgIIADIKEAAYsQMYgwEYQzIEEAAYQzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgQQABhDMgQQABhDMgsQABiABBixAxiDATIIEAAYgAQYsQMyBBAAGEMyCBAAGLEDGIMBwgIKEAAYRxjWBBiwA8ICBxAAGLADGEPCAg4QABjkAhjWBBiwA9gBAcICExAuGMcBGNEDGMgDGLADGEPYAQLCAhAQLhjUAhjIAxiwAxhD2AECwgIHEAAYsQMYQ8ICBRAAGIAEwgIREAAYjwEYjwEY6gIYjAMY5QLCAgoQLhjHARjRAxhDwgIOEC4YgAQYsQMYgwEY1ALCAgcQLhjUAhhDwgINEC4YsQMYgwEY1AIYQ8ICBBAuGEPCAhEQLhiABBixAxiDARjHARivAcICCxAuGIAEGLEDGNQCwgILEC4YgAQYsQMYgwGoAgqQBhJIwCNQtAdYvxlwAngByAEAkAEDmAGLAaABuwmqAQQwLjEw4gMEIE0YAeIDBCBBGADiAwQgRhgBiAYB&sclient=gws-wiz" target = "_blank">
                                <h4> Robot Framework: </h4> </a>
                            <h5> currently studying with interest in software testing automation. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image4.png" } alt = "Git"/>
                            <a href = "https://www.google.com/search?q=git&hl=pt-BR&ei=OoVFY9TbBuvc1sQPyLehuA0&ved=0ahUKEwjU4IfhuNj6AhVrrpUCHchbCNcQ4dUDCA4&uact=5&oq=git&gs_lp=ugYGCAEQARgJugYGCAIQARgIEgdnd3Mtd2l6uAED-AEBMg4QLhiABBixAxjHARjRAzIKEAAYsQMYgwEYQzIEEAAYQzIKEAAYsQMYgwEYQzIKEAAYsQMYgwEYQzIKEAAYsQMYgwEYQzIKEAAYsQMYgwEYQzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgoQABixAxiDARhDwgIKEAAYRxjWBBiwA8ICBxAAGLADGEPCAg4QABjkAhjWBBiwA9gBAcICEBAuGNQCGMgDGLADGEPYAQLCAgUQABiABMICERAAGI8BGI8BGOoCGIwDGOUCwgIREC4YjwEYjwEY6gIYjAMY5QLCAhAQLhixAxiDARjHARjRAxhDwgILEC4YgAQYxwEY0QPCAg0QLhixAxjHARjRAxhDqAIKkAYRSNgeUPwHWL0bcAJ4AcgBAJABBJgByAGgAeYPqgEGMC4xMy4x4gMEIE0YAeIDBCBBGADiAwQgRhgBiAYB&sclient=gws-wiz" target = "_blank">
                                <h4> Git </h4> </a>
                            <h5> currenlty studying to improve my usage of GitHub. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <InterestsContainer>
                        <ContainerRow>
                            <h4> Other points of personal interest: </h4>
                            <h5> Front-End, UI/UX Design, Graphic Design, Software Testing. </h5>
                        </ContainerRow>
                    </InterestsContainer>
                    <ExperienceContainer>
                        <h4 style = {{color: "#FA5454"}}> Experience: </h4>
                        <a href = "https://www.fct.unesp.br" target = "_blank">
                            <h4> • currently studying Computer Science in FCT - Faculdade de Ciências e Tecnologia - UNESP (since may 2018). </h4> </a>
                        <a href = "https://www.ejcomp.com.br" target = "_blank">
                            <h4> • I worked on EJComp - Empresa Júnior de Computação (from 01/04/2020 to 12/04/2021). </h4> </a>
                        <a href = "http://www.presidenteprudente.sp.gov.br/site/unidade.xhtml?cod=1" target = "_blank">
                            <h4> • I worked for the city hall of Presidente Prudente in the Software Testing Lab, located in the Inova Prudente Foundation (from 11/19/2020 to 09/30/2022). </h4> </a>
                        <h4> <br/> </h4>
                    </ExperienceContainer>
                    <Chart/>
                    <ReactJsContainer>
                        <ContainerRow>
                            <img src = { process.env.PUBLIC_URL + "/assets/image9.gif" } alt = "ReactJs"/>
                            <h4> This website was developed using ReactJs. </h4>
                        </ContainerRow>
                    </ReactJsContainer>
                    <Link to = "/portugues" style = {{ textDecoration: "none" }}>
                        <h5> trocar para Português </h5>
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};

export default English;