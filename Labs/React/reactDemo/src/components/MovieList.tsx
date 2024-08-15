export default function MovieList() {
	const movies = ["Thor", "Iron Man", "Captain America"];
	// this will loop through our movie array and treutner jsx list
	// it is good practice to use keys
	const moviesListItems = movies.map((m, index) => <li key={index}>{m}</li>);
	return <ul>{moviesListItems}</ul>;
}
