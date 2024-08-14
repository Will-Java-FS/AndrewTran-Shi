import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Intro from "./components/Intro.tsx";
import { ActorData } from "./components/ActorData.tsx";
import { Actor } from "./components/Actor.tsx";
import MovieList from "./components/MovieList.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Intro />
		<ActorData name="Ryan Reynolds" age={47} worth={350000000} />
		<ActorData name="Robert Downey Jr" age={59} worth={300000000} />
		<ActorData name="Chris Evans" age={43} worth={110000000} />
		<ActorData {...Actor} />
		<MovieList />
	</StrictMode>
);
