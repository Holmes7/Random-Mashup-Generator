import { useState } from "react";
import { Tag } from "react-tag-input";
import Table from "./Table";
import Form from "./Form";
import { Mashup } from "../helpers/Mashup";
function Generator() {
	//let localUsersString = localStorage.getItem('users') || "";
	// = JSON.parse(localUsersString)
	let localRatings: Tag[] = [{"id": "2000", "text": "2000"}]
	const [tagRatings, setTagRatings] = useState(localRatings);
	const [tableRatings, setTableRatings] = useState(["2000"])
	const [problems, setProblems] = useState(["797E"]);
 	
 	let localUsers: Tag[] = [{"id": "Holmes7", "text": "Holmes7"}]
  const [users, setUsers] = useState(localUsers);

  const [firstContest, setFirstContest] = useState(1);
  async function generate(){
  	let mashup = new Mashup(firstContest, users, tagRatings)
  	const mashupProblems = await mashup.create()
  	setTableRatings(tagRatings.map(rating => rating.text))
  	setProblems(mashupProblems)
  }
	return (
		<div>
			<Form setFirstContest={setFirstContest} users={users} setUsers={setUsers} ratings={tagRatings} setRatings={setTagRatings}/>
			<button type="button" className="button m-2 is-info is-outlined" onClick={generate}>Generate Mashup</button>
			<Table ratings={tableRatings} problems={problems}></Table>
		</div>
	)
}

export default Generator;
