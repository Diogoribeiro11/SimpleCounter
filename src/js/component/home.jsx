import React from "react";
import SecondsCounter from '../SecondsCounter.js'
import GivenNumber from '../GivenNumber.js'

//create your first component
const Home = () => {
	return (
		<div>
		<div className="container">
		<SecondsCounter seconds={0}/>
		</div>
		<div className="container">
		<GivenNumber secondsInput={10}/>
		</div>
		</div>
		

	);
};

export default Home;
