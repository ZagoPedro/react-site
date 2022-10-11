import React from "react";
import ProgressBar from "../styled-components/progress-bar";
import { ContainerRow } from "./styles";

const Chart = () => {
	return (
		<>
			<ContainerRow>
				<img src = { process.env.PUBLIC_URL + "/assets/image5.png" } alt = "ReactJS e JavaScript clássico"/>
				<ProgressBar value={75} max={100} />
			</ContainerRow>
			<ContainerRow>
				<img src = { process.env.PUBLIC_URL + "/assets/image6.png" } alt = "Python"/>
				<ProgressBar value={25} max={100} />
			</ContainerRow>
            <ContainerRow>
				<img src = { process.env.PUBLIC_URL + "/assets/image7.png" } alt = "Robot Framework"/>
				<ProgressBar value={50} max={100} />
			</ContainerRow>
            <ContainerRow>
				<img src = { process.env.PUBLIC_URL + "/assets/image8.png" } alt = "Git"/>
				<ProgressBar value={25} max={100} />
			</ContainerRow>
		</>
	);
};

export default Chart;