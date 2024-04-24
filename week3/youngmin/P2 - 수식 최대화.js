// 접근 방법
// 모든 경우의수 list 저장
// 주어진 문자열 사친연산을 기준으로 재배치
// 사칙연산에 따른 계산식 후 경우의 수 while

function solution(expression) {
  const answer = [];
  const arr = [];
  const list = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];
  let tmp = "";

  expression.split("").forEach((el) => {
    if (Number(el) >= 0) tmp += Number(el);
    else {
      arr.push(Number(tmp));
      arr.push(el);
      tmp = "";
    }
  });
  arr.push(Number(tmp));

  const OperCalculator = (num1, num2, oper) => {
    if (oper === "-") return num1 - num2;
    if (oper === "*") return num1 * num2;
    if (oper === "+") return num1 + num2;
  };

  const calculator = (arr, oper) => {
    while (arr.indexOf(oper) !== -1) {
      const cut = arr.indexOf(oper);
      arr.splice(cut - 1, 3, OperCalculator(arr[cut - 1], arr[cut + 1], oper));
    }
  };

  while (list.length) {
    const pop = list.pop();
    const tmpArr = arr.slice();
    calculator(tmpArr, pop[0]);
    calculator(tmpArr, pop[1]);
    calculator(tmpArr, pop[2]);

    answer.push(Math.abs(tmpArr));
  }

  return Math.max(...answer);
}

let expression = "100-200*300-500+20";

console.log(solution(expression));
