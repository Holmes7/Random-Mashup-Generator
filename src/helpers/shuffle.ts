import Problem from "../interfaces/Problem";

export function shuffle(arr: Problem[]) {
  arr.sort(() => Math.random()-0.5)
}
