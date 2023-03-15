import { useState } from "react";
import { mergeLists } from "../helpers/mergeLists";
import TableRow from "./TableRow";
import Problem from "../interfaces/Problem";

function Table(props: {ratings: string[], problems: Problem[]}) {
  let results = mergeLists(props.ratings, props.problems)
  console.log(props.problems)
  return (
    <table className="table is-fullwidth has-text-centered is-striped is-bordered ml-2">
      <thead>
        <tr>
          <th>Rating</th>
          <th>Problem Code</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          let code = `${result.problem.contestId}${result.problem.index}`;
          let link = `https://codeforces.com/problemset/problem/${result.problem.contestId}/${result.problem.index}`;
          return (
            <TableRow rating={result.rating} code={code} link={link} key={index}/>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;