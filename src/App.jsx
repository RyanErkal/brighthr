import { useState, useEffect } from "react";
import JSON from "./assets/data.json";
import "./App.css";
import File from "./components/File";
import Folder from "./components/Folder";

// they gave an issue that I stored the JSON in state and I didnt know why I did that originally, but, if it was calling an API, which is the normal thing it would be doing, doinmg it their way would make a call everytime you change the sort which is poor performance

function App() {
	const [fileList, setFileList] = useState([]);
	const [sort, setSort] = useState("");
	const [sortDirection, setSortDirection] = useState("asc");
	const [filter, setFilter] = useState("");

	function sortFiles(files) {
		if (sort === "name") {
			files.sort((a, b) => a.name.localeCompare(b.name));
		} else if (sort === "size") {
			files.sort((a, b) => a.size - b.size);
		} else if (sort === "added") {
			files.sort((a, b) => a.added - b.added);
		}
		if (sortDirection === "desc") {
			files.reverse();
		}
		return files;
	}

	function filterFiles(files) {
		if (filter) {
			return files.filter((file) => file.name.toLowerCase().includes(filter.toLowerCase()));
		}
		return files;
	}

	function renderFiles(files) {
		return files.map((file) => {
			if (file.type === "folder") {
				return <Folder key={file.name} {...file} />;
			}
			return <File key={file.name} {...file} />;
		});
	}

	useEffect(() => {
		setFileList(renderFiles(sortFiles(filterFiles(JSON))));
	}, [sort, sortDirection, filter]);

	//ERROR React Hook useEffect has missing dependencies: 'filterFiles' and 'sortFiles'. Either include them or remove the dependency array.
	// if I add them both in the dependency array, it will cause infinite loop, lol even copilot autocompleted that 
	// I can wrap filterFiles and sortFiles in useCallback, but they could throw an issue with that too, I'm not sure they even did this problm themselves

	return (
		<div className="App">
			<h1>Bright HR</h1>
			<div className="sort">
				<label htmlFor="sort">Sort:</label>
				<select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
					<option value="">Sort by</option>
					<option value="name">Name</option>
					<option value="size">Size</option>
					<option value="added">Date Added</option>
				</select>
				<select name="sortDirection" id="sortDirection" onChange={(e) => setSortDirection(e.target.value)}>
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>
			<div className="filter">
				<label htmlFor="filter">Filter:</label>
				<input type="text" name="filter" id="filter" onChange={(e) => setFilter(e.target.value)} />
			</div>
			<div className="fileList">
				{fileList}
			</div>
		</div>

	);
}

export default App;
