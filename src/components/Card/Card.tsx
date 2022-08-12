import Star from "../Star/Star";
import { colors } from "../../data/colors";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Card.css";

interface Project {
	id: string;
	name: string;
	url: string;
	rating: number;
	created_at: string;
}

const Card = (project: Project) => {
	const randomColor = (colors: string[]) => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const removeProjectHandler = (e: React.MouseEvent<SVGAElement>) => {
		e.preventDefault();
		const target = e.target as HTMLElement;
		console.log(target.parentNode);
	};

	return (
		<a
			id={project.id}
			href={project.url}
			target="_blank"
			rel="noreferrer"
			className="card"
			style={{ backgroundColor: randomColor(colors) }}
		>
			<h2>{project.name}</h2>
			<AiFillCloseCircle
				size={"2rem"}
				className="close-icon"
				onClick={removeProjectHandler}
			/>
			<div>
				<p>
					{[...Array(project.rating)].map(() => (
						<Star />
					))}
				</p>
			</div>
		</a>
	);
};

export default Card;
