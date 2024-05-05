//접근 방법
//다리길이 만큼의 queue구조를 만들고 0으로 초기화 (0이 없으면 나가는 타이밍을 못잡기 때문)
//모든 트럭이 나가기 전까지 조건에 맞게 밀어주고 정답을 카운팅하면서 다 나가게 되면 마무리

function solution(bridge_length, weight, truck_weights) {
  const target = truck_weights.shift();
  let [answer, sum, next] = [1, target, 0];
  let queue = Array.from({ length: bridge_length }).fill(0);

  queue[queue.length - 1] = target;

  while (sum) {
    sum -= queue.shift();
    next = truck_weights.shift();
    if (next + sum <= weight) {
      queue.push(next);
      sum += next;
    } else {
      queue.push(0);
      truck_weights.unshift(next);
    }
    answer += 1;
  }
  return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
