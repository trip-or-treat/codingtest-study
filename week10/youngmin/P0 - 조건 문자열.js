function solution(ineq, eq, n, m) {
  switch (ineq + eq) {
    case "<!":
      return n < m ? 1 : 0;
    case "<=":
      return n <= m ? 1 : 0;
    case ">!":
      return n > m ? 1 : 0;
    case ">=":
      return n >= m ? 1 : 0;
  }
}

let ineq = "<";
let eq = "=";
let n = 20;
let m = 50;

console.log(solution(ineq, eq, n, m));
