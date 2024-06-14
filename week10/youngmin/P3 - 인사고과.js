function solution(scores) {
  const [work, peer] = [0, 1];
  const wanho = scores[work];
  const wanhoSum = wanho[work] + wanho[peer];
  let maxPeer = 0;
  // 원호 기본값 1
  let answer = 1;
  // 두개 중에 하나만 틀려도 인센을 받지못하니까 하나를 기준으로 내림차순하고 같을 시 다른기준 오름차순으로 정렬하여
  // 추후 오름차순으로만 비교하게 지금 여기서는 동료평가를 기준으로 함
  scores.sort((a, b) =>
    a[work] === b[work] ? a[peer] - b[peer] : b[work] - a[work]
  );

  for (let score of scores) {
    const staff = score;
    const staffSum = staff[work] + staff[peer];

    // 기준으로 잡은 수가 앞의 점수보다 작다면 탈락 원호라면 -1
    if (staff[peer] < maxPeer) {
      if (staff === wanho) return -1;
      continue;
    }

    // 이전과 현재중 큰 동료점수로 초기화 (앞의것중에 하나라도 작으면 탈락이니까 항상 크게 )
    maxPeer = Math.max(maxPeer, staff[peer]);
    // 원호보다 높으면 원호 등수 하나씩 카운트
    if (staffSum > wanhoSum) answer += 1;
  }

  return answer;
}

let scores = [
  [2, 2],
  [1, 4],
  [3, 2],
  [3, 2],
  [2, 1],
];

console.log(solution(scores));
