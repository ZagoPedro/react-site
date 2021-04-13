import React from "react";

import C from '../assets/C.png';
import Python from '../assets/Python.png';
import Java from '../assets/Java.png';
import JavaScript from '../assets/JavaScript.png';
import Git from '../assets/Git.png';
import ReactJs from '../assets/ReactJs.png';

import { ContainerBase, ContainerRow, ContainerColumn } from './styles';
import { ContainerPortuguese, ContainerEnglish, ContainerC, ContainerJava, ContainerJavaScript, ContainerGit, ContainerPython, ContainerExperience, ContainerReactJs } from './styles';

{/* autor: Pedro H. Z. Costa - last update: 04/12/2021 */}

export default function Index() {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <ContainerPortuguese>
                        <h1> PT-BR </h1>
                        <h4> nome: Pedro H. Z. Costa </h4>
                        <h4> idade: 20 anos </h4>
                        <h4> e-mail: pedro_zago.costa@terra.com.br </h4>
                        <h4> GitHub: github.com/ZagoPedro </h4>
                    </ContainerPortuguese>
                    <ContainerC>
                        <ContainerRow>
                            <img src = {C} alt = "C Language"/>
                            <h4> Linguagem C </h4>
                            <h5> meu domínio: </h5>
                            <h6> moderado </h6>
                        </ContainerRow>
                    </ContainerC>
                    <ContainerJava>
                        <ContainerRow>
                            <img src = {Java} alt = "Java"/>
                            <h4> Java </h4>
                            <h5> meu domínio: </h5>
                            <h6> moderado-básico </h6>
                        </ContainerRow>
                    </ContainerJava>
                    <ContainerJavaScript>
                        <ContainerRow>
                            <img src = {JavaScript} alt = "JavaScript"/>
                            <h4> JavaScript </h4>
                            <h5> meu domínio: </h5>
                            <h6> moderado </h6>
                        </ContainerRow>
                    </ContainerJavaScript>
                    <ContainerPython>
                        <ContainerRow>
                            <img src = {Python} alt = "Python"/>
                            <h4> Python </h4>
                            <h5> meu domínio: </h5>
                            <h6> moderado-básico </h6>
                        </ContainerRow>
                    </ContainerPython>
                    <ContainerGit>
                        <ContainerRow>
                            <img src = {Git} alt = "Git"/>
                            <h4> Git </h4>
                            <h5> meu domínio: </h5>
                            <h6> básico </h6>
                        </ContainerRow>
                    </ContainerGit>
                    <ContainerExperience>
                        <h4 style = {{color: "#4EC9B0"}}> Estudos: </h4>
                        <h4> • atualmente estudando Ciência da Computação na FCT - Faculdade de Ciências e Tecnologia - UNESP (desde março de 2018). </h4>
                        <h4 style = {{color: "#4EC9B0"}}> Trabalho: </h4>
                        <h4> • ex-membro da EJComp - Empresa Júnior de Computação (01/04/2020 - 12/04/2021). </h4>
                        <h4> • atualmente trabalhando para a prefeitura de Presidente Prudente no Laboratório de Testes de Software (desde novembro de 2020). </h4>
                        <h4> <br/> </h4>
                    </ContainerExperience>
                    <ContainerReactJs>
                        <ContainerRow>
                            <img src = {ReactJs} alt = "ReactJs"/>
                            <h4> Este site foi desenvolvido usando ReactJs. </h4>
                        </ContainerRow>
                    </ContainerReactJs>
                </ContainerColumn>
                <ContainerColumn>
                    <ContainerEnglish>
                        <h1> EN-US </h1>
                        <h4> name: Pedro H. Z. Costa </h4>
                        <h4> age: 20 years old </h4>
                        <h4> e-mail: pedro_zago.costa@terra.com.br </h4>
                        <h4> GitHub: github.com/ZagoPedro </h4>
                    </ContainerEnglish>
                    <ContainerC>
                    <ContainerRow>
                            <img src = {C} alt = "C Language"/>
                            <h4> C Language </h4>
                            <h5> my knowledge: </h5>
                            <h6> moderate </h6>
                        </ContainerRow>
                    </ContainerC>
                    <ContainerJava>
                        <ContainerRow>
                            <img src = {Java} alt = "Java"/>
                            <h4> Java </h4>
                            <h5> my knowledge: </h5>
                            <h6> moderate-basic </h6>
                        </ContainerRow>
                    </ContainerJava>
                    <ContainerJavaScript>
                        <ContainerRow>
                            <img src = {JavaScript} alt = "JavaScript"/>
                            <h4> JavaScript </h4>
                            <h5> my knowledge: </h5>
                            <h6> moderate </h6>
                        </ContainerRow>
                    </ContainerJavaScript>
                    <ContainerPython>
                        <ContainerRow>
                            <img src = {Python} alt = "Python"/>
                            <h4> Python </h4>
                            <h5> my knowledge: </h5>
                            <h6> moderate-basic </h6>
                        </ContainerRow>
                    </ContainerPython>
                    <ContainerGit>
                        <ContainerRow>
                            <img src = {Git} alt = "Git"/>
                            <h4> Git </h4>
                            <h5> my knowledge: </h5>
                            <h6> basic </h6>
                        </ContainerRow>
                    </ContainerGit>
                    <ContainerExperience>
                    <h4 style = {{color: "#4EC9B0"}}> Studies: </h4>
                        <h4> • currently studying Computer Science in FCT - Faculdade de Ciências e Tecnologia - UNESP (since may 2018). </h4>
                        <h4 style = {{color: "#4EC9B0"}}> Work: </h4>
                        <h4> • former member of EJComp - Empresa Júnior de Computação (04/01/2020 - 04/12/2021). </h4>
                        <h4> • currently working for the city hall of Presidente Prudente in the Software Testing Lab (since november 2020). </h4>
                        <h4> <br/> </h4>
                    </ContainerExperience>
                    <ContainerReactJs>
                        <ContainerRow>
                            <img src = {ReactJs} alt = "ReactJs"/>
                            <h4> This website was developed using ReactJs. </h4>
                        </ContainerRow>
                    </ContainerReactJs>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
}
