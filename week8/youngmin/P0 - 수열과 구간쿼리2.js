function solution(arr, queries) {
  const answer = queries.map((querie) => {
    const [s, e, k] = querie;
    const newArr = arr.slice(s, e + 1).filter((el) => el > k);

    return newArr.length === 0 ? -1 : Math.min(...newArr);
  });

  return answer;
}

let arr = [0, 1, 2, 4, 3];
let queries = [
  [0, 4, 2],
  [0, 3, 2],
  [0, 2, 2],
];

console.log(solution(arr, queries));
