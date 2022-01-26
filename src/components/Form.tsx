import Input from "./Input"
import { Tag } from "react-tag-input"
import { useState } from "react";

export default function Form(props: {ratings: Tag[], setRatings: React.Dispatch<React.SetStateAction<Tag[]>>}) {
  const {ratings, setRatings} = props

  let localUsers: Tag[] = [{"id": "Holmes7", "text": "Holmes7"}]
  const [users, setUsers] = useState(localUsers);

  const [age, setAge] = useState(1);

  function handleAge(event: React.ChangeEvent<HTMLSelectElement>): void {
    setAge(parseInt(event.target.value))
    console.log(age);
  }
  return (
    <form>
      <div className="columns">
        <div className="column">
          <Input label="Codeforces Usernames"state={users} setState={setUsers}  />  
        </div>
        <div className="column">
          <Input label="Problem Ratings" state={ratings} setState={setRatings}  />
        </div>
      </div>
      <button className="button m-2 is-info is-outlined">Generate Mashup</button>
      <div className="select m-2">
        <select onChange={handleAge} name="age" id="">
          <option value="1">All Time</option>
          <option value="754">Since 2017</option>
          <option value="1284">Since 2020</option>
          <option value="1470">Since 2021</option>
          <option value="-1">Most Recent (Not Random)</option>
        </select>
      </div>
    </form>
  )
}