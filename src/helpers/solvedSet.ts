import UserSubmission from "../interfaces/UserSubmission";
import { getCF } from './getCF'

export async function solvedByAllUsers(userList: string[]) {
  let solved = new Set<string>();
  userList.map(async (user) => {
    const submissionList = await solvedByUser(user)
    submissionList.map((submission) => {
      solved.add(submission)
    })
  })
  return solved;
}

async function solvedByUser(user: string) {
  const url = `https://codeforces.com/api/user.status?handle=${user}`;
  const json: UserSubmission = await getCF(url)
  const subs = json['result']
  let submissionList: string[] = []
  subs.map((sub) => {
    submissionList.push(sub['problem']['name'])
  })
  return submissionList;
}

