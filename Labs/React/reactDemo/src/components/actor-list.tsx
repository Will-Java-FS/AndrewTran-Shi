import { useState, useRef } from "react";

export default function ActorList() {
	const [actors, setActors] = useState(["Ryan Reynolds", "Hugh Jackman"]);
	const actorInput = useRef<HTMLInputElement>(null); // Initialize with null

	const actorListItem = actors.map((a) => <li key={a}>{a}</li>);

	function addActor() {
		if (actorInput.current) {
			const actor = actorInput.current.value;
			if (actors.includes(actor)) {
				alert("You already added this actor")
			}
			else {

				setActors([...actors, actor]);
			}
			actorInput.current.value = ""; // Clear the input field after adding the actor
		}
	}


	return (
		<>
			<h1 className="text-2xl font-sans text-emerald-500">Actor List</h1>
			<ul style={{ height: `${actors.length * 2}rem` }}>
				{actorListItem}
			</ul>
			<div>
				<input className="border py-1 " type="text" ref={actorInput} />
				<button className="btn btn-sm m-2 bg-success glass" onClick={addActor}>Add Actor</button>
			</div>
		</>
	);
}