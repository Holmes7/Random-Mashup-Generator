export function FirstContest(props: {handleFirstContest: (event: React.ChangeEvent<HTMLSelectElement>) => void}) {
  return (
    <div className="select m-2">
      <select onChange={props.handleFirstContest} name="firstContest" id="">
        <option value="1">All Time</option>
        <option value="754">Since 2017</option>
        <option value="1284">Since 2020</option>
        <option value="1470">Since 2021</option>
        <option value="-1">Most Recent (Not Random)</option>
      </select>
    </div>
  )
}