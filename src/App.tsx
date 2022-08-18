import { useState } from "react";
import { Project } from "../types";
import "./App.css";
import AddProject from "./components/AddProject/AddProject";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { defaultProjects } from "./data/projects";

const App = () => {
	const localProjects = localStorage.getItem("projects")! as string;

	const [projects, setProjects] = useState<Project[]>(
		localProjects ? JSON.parse(localProjects) : defaultProjects
	);
	const [openModal, setOpenModal] = useState(false);

	const openAddProject: () => void = () => {
		setOpenModal(true);
	};

	return (
		<div className="App">
			<Header openAddProject={openAddProject} />
			<div className="card-grid">
				{projects.map((project) => (
					<Card {...project} key={project.id} />
				))}
			</div>
			{openModal && (
				<AddProject
					setOpenModal={setOpenModal}
					projects={projects}
					setProjects={setProjects}
				/>
			)}
		</div>
	);
};

export default App;
