import "./Header.css";
const Header = ({ openAddProject }: { openAddProject: () => void }) => {
	return (
		<header>
			<h1>Awesome Projects</h1>
			<div className="actions">
				<button onClick={openAddProject}>Add new</button>
				<label htmlFor="sort">
					Sort by
					<select name="sort" id="sort">
						<option value="rating">Rating</option>
						<option value="date-desc">Date (descending)</option>
						<option value="date-asc">Date (ascending)</option>
					</select>
				</label>
			</div>
		</header>
	);
};

export default Header;
