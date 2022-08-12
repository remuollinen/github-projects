import Star from "../Star/Star";

const Card = ({ name, rating }: { name: string; rating: number }) => {
	return (
		<div className="card">
			<h2>{name}</h2>
			<button>X</button>
			<h3>Rating</h3>
			<div>
				<p>
					{[...Array(rating)].map(() => (
						<Star />
					))}
				</p>
			</div>
		</div>
	);
};

export default Card;
