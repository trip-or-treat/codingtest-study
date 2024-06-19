/*
    1. prioritie를 index를 포함해서 새롭게 매핑해줍니다. ex) [[2,0],[1,1],[3,2],[2,3]] 
    2. 첫번째값을 꺼내고, 우선순위가 더 높은친구가 존재하면 다시 배열에 넣고, count해줍니다.
    3. 원하는 위치의 값을 꺼낼때 count값을 출력합니다.
*/

function solution(priorities, location) {
  let cnt = 0;
  let mapped = priorities.map((priority, idx) => [priority, idx]);

  while (mapped.length) {
    const shifted = mapped.shift();
    const [priority, idx] = shifted;
    const target = mapped.map(([p, i]) => p);
    const targetMax = Math.max(...target);

    if (priority < targetMax) {
      mapped.push(shifted);
      continue;
    } else {
      cnt++;
      if (idx === location) return cnt;
    }
  }
}
