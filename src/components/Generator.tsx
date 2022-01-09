import { useState } from "react";
import Input from "./Input";
import { Tag } from "react-tag-input";

function Generator() {
	//let localUsersString = localStorage.getItem('users') || "";
	// = JSON.parse(localUsersString)
	let localUsers: Tag[] = [{"id": "Holmes7", "text": "Holmes7"}]

	const [users, setUsers] = useState(localUsers);
	let localRatings: Tag[] = [{"id": "1800", "text": "1800"}]
	
	const [ratings, setRatings] = useState(localRatings);

	return (
		<div className="columns">
			<div className="column">
				<Input label="Codeforces Usernames"state={users} setState={setUsers}  />	
				</div>
			<div className="column">
				<Input label="Problem Ratings" state={ratings} setState={setRatings}  />
			</div>
		</div>
	)
}

export default Generator;
