import Problem from "../interfaces/Problem";

export function mergeLists(ratings: string[], problems: Problem[]) {
  let results: {rating: string, problem: Problem}[] = [];
  for(let i=0; i<ratings.length; i++){
    results.push({rating: ratings[i], problem: problems[i]});
  }
  return results;
}