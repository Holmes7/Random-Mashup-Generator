import { useReducer, useState } from "react";
import Input from "./Input";
import { Tag } from "react-tag-input";
import Table from "./Table";
import Form from "./Form";
function Generator() {
	//let localUsersString = localStorage.getItem('users') || "";
	// = JSON.parse(localUsersString)
	let localRatings: Tag[] = [{"id": "2000", "text": "2000"}]
	const [ratings, setRatings] = useState(localRatings);

	const [problems, setProblems] = useState(["797E"]);
 
	return (
		<div>
			<Form ratings={ratings} setRatings={setRatings}/>
			<Table ratings={ratings.map(rating => {
					return rating.text;
				})} problems={problems}></Table>
		</div>
	)
}

export default Generator;
