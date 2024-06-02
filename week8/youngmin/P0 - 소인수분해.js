function solution(n) {
  let answer = [];
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0 && isPrime(i)) answer.push(i);
  }

  return answer;
}

function isPrime(num) {
  if (num <= 1 || num === 2) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

let n = 12;
console.log(solution(n));
