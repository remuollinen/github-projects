import { AiFillCloseCircle } from "react-icons/ai";
import "./AddProject.css";

const AddProject = ({
	setOpenModal,
}: {
	setOpenModal: (newState: boolean) => void;
}) => {
	const closeModalHandler = () => {
		setOpenModal(false);
	};

	return (
		<div className="form-wrapper">
			<form>
				<h2>Add a new project</h2>
				<label>
					Name of Project
					<input type="text"></input>
				</label>
				<label>
					Github URL
					<input type="text"></input>
				</label>
				<label>
					Rating
					<input type="text"></input>
				</label>
				<AiFillCloseCircle
					size={"2rem"}
					className="close-icon"
					onClick={closeModalHandler}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default AddProject;
