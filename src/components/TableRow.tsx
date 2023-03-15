function TableRow(props: {rating: string, code: string, link: string}) {
  const {rating, code, link} = props;
  function copyProblem() {
    navigator.clipboard.writeText(code);
  }
  return (
    <tr>
      <td>{rating}</td>
      <td ><button className="button is-primary is-outlined is-small" onClick={copyProblem}>{code}</button></td>
      <td><a href={link} target="_blank">Go to Problem</a></td>
    </tr>
  )
}

export default TableRow;