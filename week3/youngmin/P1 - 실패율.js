// 접근 방법

// 스테이지를 완료하지 못한 참가자들의 수를 구하기 위해 오름차순 정렬
// lastIndexOf()를 이용해 마지막 자릿수를 구함
// n만큼 반복하면서 자릿수 + 1 (인덱스는 0부터 시작하기 때문) / stages.length 로 실패율 answer에 적재
// 예외 사항(스테이지에 사람이 없을경우 = 통과)처리 후 실패율 정렬

function solution(N, stages) {
  const answer = [];

  stages.sort((a, b) => a - b);

  for (let i = 1; i <= N; i += 1) {
    const cut = stages.lastIndexOf(i);

    if (cut === -1) {
      answer.push([0, i]);
      continue;
    }

    answer.push([(cut + 1) / stages.length, i]);
    stages = stages.slice(cut + 1, stages.length);
  }

  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });

  return answer.map((stage) => stage[1]);
}

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
