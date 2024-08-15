import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout.tsx";
import { Home } from "./pages/home.tsx";
import ContactForm from "./components/contact-form.tsx";
import { Blog } from "./pages/blogs.tsx";
import ActorList from "./components/actor-list.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			{/* this updates the url */}
			<Routes>
				{/* Layout route with nested routes inside */}
				<Route path="/" element={<Layout />}>
					{/* Home component as the index route */}
					<Route index element={<Home />} />
					{/* ContactForm component on a different path, e.g., "/contact" */}
					<Route path="contact" element={<ContactForm />} />
					<Route path="Blog" element={<Blog />} />
					<Route path="actors" element={<ActorList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);