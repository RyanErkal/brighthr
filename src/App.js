import data from "./assets/data.json";
import "./App.css";

function getFiles(data) {
	const files = data.map((file) => {
		if (file.type === "folder") {
			return (
				<p className="folder">
					./{file.name}
					<span className="tab">{getFiles(file.files)}</span>
				</p>
			);
		} else {
			return (
				<p>
					{file.name}.{file.type}
				</p>
			);
		}
	});
	return files;
}

const mappedFiles = getFiles(data);

console.log(data);

function App() {
	return (
		<div className="App">
			<h1>Bright HR</h1>
			<select name="select" id="select">
				<option value="all">All</option>
				<option value="active">Active</option>
				<option value="inactive">Inactive</option>
			</select>
			<pre>{mappedFiles}</pre>
		</div>
	);
}

export default App;
