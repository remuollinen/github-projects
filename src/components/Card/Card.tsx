import Star from "../Star/Star";
import { Project, SetProjectsState } from "../../../types";
import { colors } from "../../data/colors";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Card.css";
import { motion } from "framer-motion";

const Card = ({
	project,
	setProjects,
}: {
	project: Project;
	setProjects: SetProjectsState;
}) => {
	const randomColor = (colors: string[]) => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const removeProjectHandler = (e: React.MouseEvent<SVGAElement>) => {
		e.preventDefault();
		const target = e.target as HTMLElement;
		const card = target.closest(".card");
		const localProjects = JSON.parse(localStorage.getItem("projects")!);
		const index = localProjects.findIndex(
			(project: Project) => project.id === card?.id
		);
		localProjects.splice(index, 1);
		localStorage.setItem("projects", JSON.stringify(localProjects));
		setProjects(localProjects);
	};

	return (
		<motion.div layout transition={{ duration: 0.7 }}>
			<a
				id={project.id}
				href={project.url}
				target="_blank"
				rel="noreferrer"
				className="card"
				style={{
					backgroundColor: randomColor(colors),
				}}
			>
				<h2>{project.name}</h2>
				<AiFillCloseCircle
					size={"2rem"}
					className="close-icon"
					onClick={removeProjectHandler}
				/>
				<div>
					<p>
						{[...Array(project.rating)].map((i) => (
							<Star key={i} />
						))}
					</p>
				</div>
			</a>
		</motion.div>
	);
};

export default Card;
