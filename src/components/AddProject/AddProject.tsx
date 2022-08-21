import { FormEvent, useState } from "react";
import { Project, SetProjectsState } from "../../../types";
import { AiFillCloseCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import "./AddProject.css";

const AddProject = ({
	setOpenModal,
	projects,
	setProjects,
}: {
	setOpenModal: (newState: boolean) => void;
	projects: Project[];
	setProjects: SetProjectsState;
}) => {
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");
	const [rating, setRating] = useState(1);

	const closeModalHandler = () => {
		setOpenModal(false);
	};

	const addProjectHandler = (e: FormEvent) => {
		e.preventDefault();
		const projectData: Project = {
			id: uuidv4(),
			name,
			url,
			rating,
			created_at: new Date().toISOString(),
		};
		localStorage.setItem(
			"projects",
			JSON.stringify(projects.concat(projectData))
		);
		setProjects(projects.concat(projectData));
		closeModalHandler();
	};

	return (
		<div className="form-wrapper">
			<form onSubmit={addProjectHandler}>
				<h2>Add a new project</h2>
				<label htmlFor="name">
					Name of Project
					<input
						type="text"
						name="name"
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label htmlFor="url">
					Github URL
					<input
						type="text"
						name="url"
						required
						onChange={(e) => setUrl(e.target.value)}
					/>
				</label>
				<label htmlFor="rating">
					Rating
					<input
						type="number"
						name="rating"
						defaultValue="1"
						min="1"
						max="5"
						required
						onChange={(e) => setRating(+e.target.value)}
					/>
				</label>
				<AiFillCloseCircle
					size={"2rem"}
					className="close-icon"
					onClick={closeModalHandler}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddProject;
