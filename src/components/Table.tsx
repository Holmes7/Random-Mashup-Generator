import mergeLists from "../helpers/mergeLists";
import TableRow from "./TableRow";

function Table(props: {ratings: string[], problems: string[]}) {
  let results = mergeLists(props.ratings, props.problems)
  return (
    <table className="table is-fullwidth has-text-centered is-striped is-bordered ml-2">
      <thead>
        <tr>
          <th>Rating</th>
          <th>Problem Code</th>
        </tr>
      </thead>
      <tbody>
        {results.map(result => (
          <TableRow rating={result.rating} problem={result.problem} key={result.problem}></TableRow>
        ))}
      </tbody>
    </table>
  )
}

export default Table;