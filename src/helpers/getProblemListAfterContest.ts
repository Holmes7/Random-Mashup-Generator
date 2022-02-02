import Problem from "../interfaces/Problem";
import { shuffle } from "./shuffle";
export function getProblemListAfterContest(problemList: Problem[], firstContest: number) {
  if(firstContest == -1){
    return problemList
  }
  let problemListAfterContest: Problem[] = []
  for (let problem of problemList){
    if(problem.contestId < firstContest){
      console.log(problem.contestId)
      break
    }
    problemListAfterContest.push(problem)
  }
  shuffle(problemListAfterContest)
  return problemListAfterContest
}
