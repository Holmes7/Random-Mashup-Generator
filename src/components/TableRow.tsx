function TableRow(props: {rating: string, problem: string}) {
  const {rating, problem} = props;
  function copyProblem() {
    navigator.clipboard.writeText(problem);
  }
  return (
    <tr>
      <td>{rating}</td>
      <td ><button className="button is-primary is-outlined is-small" onClick={copyProblem}>{problem}</button></td>
    </tr>
  )
}

export default TableRow;