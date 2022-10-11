import React from "react";
import { Link } from "react-router-dom";
import { ContainerBase, ContainerColumn, HomeImage } from "../components/styled-components/styles";

{/* autor: Pedro H. Z. Costa - last update: 10/11/2022 */}

const Home = () => {
    return (
        <>
            <ContainerBase style = {{ height: "100%" }}>
                <ContainerColumn style = {{ alignItems: "center", justifyContent: "center" }}>
                    <Link to = "/portugues" style = {{ textDecoration: "none", marginTop: "20vh" }}>
                        <HomeImage src = { process.env.PUBLIC_URL + "/assets/Portugues.png" } alt = "Portugês" />
                    </Link>
                    <Link to = "/english" style = {{ textDecoration: "none" }}>
                        <HomeImage src = { process.env.PUBLIC_URL + "/assets/Ingles.png" } alt = "English" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};

export default Home;