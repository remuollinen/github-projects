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
			<div className="card-grid">
				{projects.map((project) => (
					<Card {...project} key={project.id} />
				))}
			</div>
		</div>
	);
};

export default App;
