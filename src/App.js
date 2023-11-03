import { useState, useLayoutEffect } from "react";
import JSONdata from "./assets/data.json";
import "./App.css";

function App() {
	const [files, setFiles] = useState("");
	const [sort, setSort] = useState("name");
	const [sortOrder, setSortOrder] = useState("asc");

	useLayoutEffect(() => {
		setFiles(mapFiles(sortFiles(JSONdata)));

		function mapFiles(data) {
			const mappedFiles = data.map((file) => {
				if (file.type === "folder") {
					return (
						<div className="folder" key={file.name}>
							./{file.name}
							<span className="tab">{mapFiles(file.files)}</span>
						</div>
					);
				} else {
					return (
						<div key={file.name}>
							{file.name}.{file.type}
						</div>
					);
				}
			});
			return mappedFiles;
		}

		function sortFiles(data) {
			const sortedFiles = data.sort((a, b) => {
				if (sort === "name") {
					return a.name.localeCompare(b.name);
				} else if (sort === "size") {
					return a.size - b.size;
				} else {
					return new Date(a.added) - new Date(b.added);
				}
			});
			if (sortOrder === "desc") {
				sortedFiles.reverse();
			}
			return sortedFiles;
		}
	}, [sort, sortOrder]);

	function handleSortChange(e) {
		setSort(e.target.value);
	}

	function handleSortOrderChange(e) {
		setSortOrder(e.target.value);
	}

	return (
		<div className="App">
			<h1>Bright HR{sort}</h1>
			<select name="sort" onChange={handleSortChange}>
				<option value="">Sort by</option>
				<option value="name">Name</option>
				<option value="size">Size</option>
				<option value="date">Date</option>
			</select>
			<select name="sortOrder" onChange={handleSortOrderChange}>
				<option value="">Sort Order</option>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
			<pre>{files}</pre>
		</div>
	);
}

export default App;
