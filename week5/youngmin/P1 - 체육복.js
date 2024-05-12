// 중복이나 순서가 변경될 수 있기에 중복 제거 후 정렬
// 중복이 없는만큼 기존 인원 세팅
// 중복이 제거된 잃어버린 학생을 빌려줄수 있는 학생들 사이를 순회하면서 빌릴 수 있다면 -1 체크 후 인원 추가

function solution(n, lost, reserve) {
  let answer = n;

  let newLost = lost.filter((el) => !reserve.includes(el)).sort();
  let newReserve = reserve.filter((el) => !lost.includes(el)).sort();
  answer -= newLost.length;

  newLost.forEach((lo) => {
    let [min, max] = [lo - 1, lo + 1];
    for (let i = 0; i < newReserve.length; i += 1) {
      if (min === newReserve[i] || max === newReserve[i]) {
        answer += 1;
        newReserve[i] = -1;
        break;
      }
    }
  });

  return answer;
}

let n = 5;
let lost = [4, 2];
let reserve = [3, 5];

console.log(solution(n, lost, reserve));
