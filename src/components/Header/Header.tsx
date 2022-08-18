import "./Header.css";

const Header = ({
	openAddProject,
	setSortValue,
}: {
	openAddProject: () => void;
	setSortValue: (newValue: string) => void;
}) => {
	return (
		<header>
			<h1>Awesome Projects</h1>
			<div className="actions">
				<button onClick={openAddProject}>Add new</button>
				<label htmlFor="sort">
					Sort by
					<select
						name="sort"
						id="sort"
						defaultValue="select"
						onChange={(e) => setSortValue(e.target.value)}
					>
						<option value="select" disabled>
							Select
						</option>
						<option value="date-desc">Date (descending)</option>
						<option value="date-asc">Date (ascending)</option>
						<option value="rating">Rating</option>
					</select>
				</label>
			</div>
		</header>
	);
};

export default Header;
