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
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [sortValue, setSortValue] = useState<string>("");

	// opens modal for adding new project
	const openAddProject: () => void = () => {
		setOpenModal(true);
	};

	// sorts projects according to sortValue state (rating or date)
	const sortHandler = (projects: Project[]) => {
		if (sortValue === "rating") {
			return projects?.sort((a: Project, b: Project) => b.rating - a.rating);
		} else if (sortValue === "date-desc") {
			return projects?.sort(
				(a: Project, b: Project) =>
					Date.parse(b.created_at) - Date.parse(a.created_at)
			);
		} else if (sortValue === "date-asc") {
			return projects?.sort(
				(a: Project, b: Project) =>
					Date.parse(a.created_at) - Date.parse(b.created_at)
			);
		} else {
			return projects;
		}
	};

	return (
		<div className="App">
			<Header openAddProject={openAddProject} setSortValue={setSortValue} />
			<div className="card-grid">
				{sortHandler(projects).map((project) => (
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
