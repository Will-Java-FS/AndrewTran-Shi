// this is component that use state

import { useState } from "react";

export default function Counter() {
	// let value = 1;
	// function increase() {
	// we CANNOT change values in STATE THEY ARE IMMUTABLE
	// 	value++;
	// 	console.log(value);
	// }
	function increase() {
		setValue(value + 1); // this works because we are
		console.log(`value = `, value);
	}
	// State needs a state variable and a function to change the state ie setValue
	const [value, setValue] = useState(0);
	return (
		<>
			<h2>The Value is {value}</h2>
			<button onClick={increase}> Increase!</button>
		</>
	);
}
