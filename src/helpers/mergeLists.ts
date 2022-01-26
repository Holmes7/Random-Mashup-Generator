export default function mergeLists(ratings: string[], problems: string[]): {rating: string, problem: string}[] {
  let results: {rating: string, problem: string}[] = [];
  for(let i=0; i<ratings.length; i++){
    results.push({rating: ratings[i], problem: problems[i]});
  }
  return results;
}