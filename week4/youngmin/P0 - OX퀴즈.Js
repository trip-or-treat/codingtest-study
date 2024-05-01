function solution(quiz) {
  const answer = [];
  const nums = quiz.map((el) => el.split(" "));
  nums.forEach((el) => {
    const [num1, sign, num2, num3] = [+el[0], el[1], +el[2], +el[4]];
    let sum = 0;
    sign === "+" ? (sum = num1 + num2) : (sum = num1 - num2);

    sum === num3 ? answer.push("O") : answer.push("X");
  });

  return answer;
}

let quiz = ["3 - 4 = -3", "5 + 6 = 11"];

console.log(solution(quiz));
