import { Tag } from "react-tag-input";
import { solvedByAllUsers } from "./solvedSet";
import { getCF } from "./getCF";
import Problem from "../interfaces/Problem";
import { getProblemListAfterContest } from "./getProblemListAfterContest";

export class Mashup {
  userList: string[] = []
  ratings: number[] = []
  firstContest = 1
  constructor(firstContest: number, userTagList: Tag[], ratingsTagList: Tag[]){
    this.userList = userTagList.map(user => user.text)
    this.ratings = ratingsTagList.map(rating => parseInt(rating.text))
    this.firstContest = firstContest
  }
  async getProblems() {
    const problems_json = await getCF('https://codeforces.com/api/problemset.problems')
    const allProblems: Problem[] = problems_json['result']['problems'];
    return allProblems
  }
  async create() {
    let solved = await solvedByAllUsers(this.userList)
    const problems = await this.getProblems()
    const problemsAfterFirstContest = getProblemListAfterContest(problems, this.firstContest)
    let mashup = this.ratings.map(rating => {
      return this.getFirstUnsolvedProblem(rating, problemsAfterFirstContest, solved)
    })
    return mashup;
  }
  getFirstUnsolvedProblem(rating: number, problemsAfterFirstContest: Problem[], solved: Set<string>): Problem {
    for (let problem of problemsAfterFirstContest) {
      if(problem.rating == rating && !solved.has(problem.name)){
        solved.add(problem.name)
        return problem;
      }
    }
    throw("No problem found");
  }
}