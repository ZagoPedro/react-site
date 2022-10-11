import React from "react";
import { ContainerRow } from "./styles";

const ProgressBar = ({value, max}) => {
    let actualMax = max / 100;
    let actualValue = value / 100;
    actualValue = actualValue / actualMax;
    return (
        <ContainerRow>
            <progress value = {actualValue}/>
        </ContainerRow>
    )
};

export default ProgressBar;