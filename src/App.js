import { useState, useLayoutEffect } from "react";
import JSON from "./assets/data.json";
import "./App.css";

function App() {
	const [files, setFiles] = useState("");
	const [sort, setSort] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");
	const [filter, setFilter] = useState("");
	const [JSONdata, setJSONdata] = useState(JSON);

	useLayoutEffect(() => {
		setFiles(mapFiles(sortFiles(filterFiles(JSONdata))));

		function mapFiles(data) {
			const mappedFiles = data.map((file) => {
				if (file.type === "folder") {
					return (
						<div
							className="folder"
							key={file.name}
							onClick={() => {
								setJSONdata(file.files);
							}}>
							./{file.name}
							<div className="tab">{mapFiles(file.files)}</div>
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

		function filterFiles(data) {
			const filteredFiles = data.filter((file) => {
				return file.name.toLowerCase().includes(filter.toLowerCase());
			});
			return filteredFiles;
		}
	}, [sort, sortOrder, filter, JSONdata]);

	function handleSortChange(e) {
		setSort(e.target.value);
	}

	function handleSortOrderChange(e) {
		setSortOrder(e.target.value);
	}

	function handleFilterChange(data) {
		setFilter(data);
	}

	return (
		<div className="App">
			<h1>Bright HR</h1>
			<button onClick={() => setJSONdata(JSON)}>Back</button>
			<select name="sort" onChange={handleSortChange}>
				<option value="">Sort by</option>
				<option value="name">Name</option>
				<option value="size">Size</option>
				<option value="date">Date</option>
			</select>
			<select name="sortOrder" onChange={handleSortOrderChange}>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
			<input
				type="text"
				placeholder="Filter by name"
				onChange={(e) => handleFilterChange(e.target.value)}
			/>
			<pre>{files}</pre>
		</div>
	);
}

export default App;
