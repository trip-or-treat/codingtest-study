function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [an, bn] = [Math.abs(a - n), Math.abs(b - n)];
    if (an === bn) return b - a;

    return an - bn;
  });
}

let numlist = [1, 2, 3, 4, 5, 6];
let n = 4;

console.log(solution(numlist, n));
