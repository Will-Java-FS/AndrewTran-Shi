/**
 *
 * @param props ({name:string, age:number worth:numnber})
 * @returns
 */
export function ActorData(props: { name: string; age: number; worth: number }) {
	const name = props.name;
	const age = props.age;
	const worth = props.worth;

	// object destructuring, useful for JS projects
	// const { name, age, worth } = props;
	console.log(name, age, worth);
	return (
		<>
			<table>
				<tbody>
					<tr>
						<td>
							<b>Name:</b>
						</td>
						<td>{name}</td>
					</tr>

					<tr>
						<td>
							<b>Age</b>
						</td>
						<td>{age}</td>
					</tr>
					<tr>
						<td>
							<b>Worth</b>
						</td>
						<td>${worth}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
