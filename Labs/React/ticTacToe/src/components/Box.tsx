import { useState } from "react";

export default function Board() {
	//Array(9).fill(null) creates an array with nine elements and sets each of them to null
	// the useState() that wraps it bascailly sets all teh squares to the state "square"
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = (
			<span>
				Winner: <span style={{ color: "green" }}>{winner}</span>
			</span>
		);
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}
	function handleClick(i: number) {
		// Create a copy of the squares array to avoid direct mutation
		const newSquares = squares.slice(); //creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method.
		if (squares[i] || calculateWinner(squares)) {
			return; // this checks if the square is already clicked, to prevent chaning square after pplayer makes move
		}
		newSquares[i] = xIsNext ? "X" : "O"; // the handleClick updates the newSquare array to add X to the first ([0] index or wherever) square
		// xIsNext is true, it assigns the value "X" to the i-th index of the newSquares array. Otherwise, it assigns the value "O"
		// this tracks the current move (x or O)
		setSquares(newSquares); // this is state updater that updates the square state variables with the new value of newSquares
		// newSquares is an array that tracks whats on teh board
		//[null, null, null, null, null, null, 'X', null, null]
		// this will be refelceed on the board
		console.log(newSquares); // displays the current arrray after the move
		setXIsNext(!xIsNext); // Toggle the next player
		// setXisNext is the update for the xIsNext , so if its true it assings X to teh [i] of teh newSquares array orther wise its "0"
	}

	function Square({
		value, // the square receives the value prop from the board
		onClick // we are passing the onClick function to the square function as a prop
	}: {
		value: string | null; // this tells use that the value prop will receive a string ("X" or "O") or a null
		onClick: () => void;
	}) {
		return (
			<button
				className="square"
				onClick={onClick}
				style={{ color: value === "X" ? "blue" : "red" }} // Conditional styling
			>
				{value}
			</button>
		);
	}

	function calculateWinner(squares: Array<string | null>) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	return (
		<>
			<div className="board-container">
				<div className="status">
					<h3>{status}</h3>
				</div>
				<div className="board-row">
					<Square value={squares[0]} onClick={() => handleClick(0)} />
					<Square value={squares[1]} onClick={() => handleClick(1)} />
					<Square value={squares[2]} onClick={() => handleClick(2)} />
				</div>
				<div className="board-row">
					<Square value={squares[3]} onClick={() => handleClick(3)} />
					<Square value={squares[4]} onClick={() => handleClick(4)} />
					<Square value={squares[5]} onClick={() => handleClick(5)} />
				</div>
				<div className="board-row">
					<Square value={squares[6]} onClick={() => handleClick(6)} />
					<Square value={squares[7]} onClick={() => handleClick(7)} />
					<Square value={squares[8]} onClick={() => handleClick(8)} />
				</div>
			</div>
		</>
	);
}
