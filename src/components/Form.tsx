import Input from "./Input"
import { Tag } from "react-tag-input"
import { FirstContest } from "./FirstContest";
import { Mashup } from "../helpers/Mashup";
export default function Form(props: {users: Tag[], setUsers: React.Dispatch<React.SetStateAction<Tag[]>>, ratings: Tag[], setRatings: React.Dispatch<React.SetStateAction<Tag[]>>, setFirstContest: React.Dispatch<React.SetStateAction<number>>}) {
  const {users, setUsers, ratings, setRatings, setFirstContest} = props

  function handleFirstContest(event: React.ChangeEvent<HTMLSelectElement>): void {
    setFirstContest(parseInt(event.target.value))
  }
  return (
    <div>
      <div>
        <Input label="Codeforces Usernames" state={users} setState={setUsers}  />
        <Input label="Problem Ratings" state={ratings} setState={setRatings}  />
      </div>
      <FirstContest handleFirstContest={handleFirstContest} />
    </div>
  )
}