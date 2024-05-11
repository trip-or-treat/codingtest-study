// 각 옵션별로 계산해줄 함수를 만들고
// 문자열을 순회하면서 조건에 맞게 라운드별로 점수를 만들어 최종 결합

function solution(dartResult) {
  let num = "";
  let answer = [];

  const calculator = (score, round) => {
    if (round === "S") return score;
    if (round === "D") return score * score;
    if (round === "T") return Math.pow(score, 3);
  };

  const optionCalculator = (num, option) => {
    if (option === "*") return num * 2;
    if (option === "#") return num * -1;
  };

  for (let cur of dartResult) {
    if (Number(cur) >= 0) num += cur;
    else {
      if (cur === "*") {
        // 현재와 이전까지 2배
        for (let i = answer.length - 1; i >= answer.length - 2; i -= 1) {
          answer[i] = optionCalculator(answer[i], cur);
        }
        continue;
      }
      if (cur === "#") {
        answer[answer.length - 1] = optionCalculator(
          answer[answer.length - 1],
          cur
        );
        continue;
      }
      // 라운드별 점수 적재
      answer.push(calculator(Number(num), cur));
      num = "";
    }
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}

let dartResult = "1D#2S*3S";

console.log(solution(dartResult));
