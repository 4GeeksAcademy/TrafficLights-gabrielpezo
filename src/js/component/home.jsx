import React, { useState } from "react";
//create your first component

const Home = () => {
	const [turnOn, setTurnOn] = useState ("")
	return (
	<>
		<div id="trafficTop"></div>
		<div id="Container">
			<div onClick={() => setTurnOn("red")} className={"red light" + (turnOn === "red" ? " selected":"")}></div>
			<div onClick={() => setTurnOn("yellow")} className={"yellow light" + (turnOn === "yellow" ? " selected":"")}></div>
			<div onClick={() => setTurnOn("green")} className={"green light" + (turnOn === "green" ? " selected":"")}></div>
		</div>
	</>
	)
};

export default Home;
