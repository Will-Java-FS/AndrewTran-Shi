export const Actor: { name: string; age: number; worth: number } = {
	name: "Chris Evans",
	age: 43,
	worth: 110000000
};

const updatedActor = { ...Actor, worth: 120000000 };

console.log(updatedActor);
