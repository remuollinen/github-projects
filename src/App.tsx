import "./App.css";
import Card from "./components/Card/Card";
import { projects } from "./data/projects";

const App = () => {
	return (
		<div>
			<h1>Awesome Projects</h1>
			<div>
				<button>Add +</button>
				<button>Sort</button>
			</div>
			<div>
				{projects.map((project) => (
					<Card
						key={project.name}
						name={project.name}
						rating={project.rating}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
