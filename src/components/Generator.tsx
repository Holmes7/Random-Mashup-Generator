import { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import { Mashup } from "../helpers/Mashup";
function Generator() {
	//let localUsersString = localStorage.getItem('users') || "";
	// = JSON.parse(localUsersString)
	// let localRatings: Tag[] = [{"id": "2000", "text": "2000"}];

	const [tagRatings, setTagRatings] = useState([{"id": "2100", "text": "2100"}]);

	useEffect(() => {
		const tagRatings = JSON.parse((localStorage.getItem('ratings') || '[{"id": "2100", "text": "2100"}]'))
		if(tagRatings.length){
			setTagRatings(tagRatings)
		}
	}, [])

	const [tableRatings, setTableRatings] = useState(["2000"])
	const [problems, setProblems] = useState(["797E"]);
 	
  const [users, setUsers] = useState([{"id": "Holmes7", "text": "Holmes7"}]);

  useEffect(() => {
		const users = JSON.parse((localStorage.getItem('users') || '[{"id": "Holmes7", "text": "Holmes7"}]'))
		if(users.length){
			setUsers(users)
		}
	}, [])

  const [firstContest, setFirstContest] = useState(1);
  async function generate(){
  	let mashup = new Mashup(firstContest, users, tagRatings)
  	const mashupProblems = await mashup.create()
  	setTableRatings(tagRatings.map(rating => rating.text))
  	setProblems(mashupProblems)
  	localStorage.setItem('ratings', JSON.stringify(tagRatings));
  	localStorage.setItem('users', JSON.stringify(users));
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
