function solution(bridge_length, weight, truck_weights) {
  // 다리 길이만큼 다리에 있는 트럭 배열 생성 [0,0,0,0, ...]
  let bridge_truck = Array.from({ length: bridge_length }, () => 0);

  // 다리에 있는 트럭 무게의 합을 구하는 변수 선언
  let bridge_sum = 0;
  let time = 0;

  time++;

  // 맨 앞 0을 삭제
  bridge_truck.shift();

  // 대기 트럭의 첫번째를 다리에 올림, 대기열에서 삭제
  bridge_sum += truck_weights[0];
  bridge_truck.push(truck_weights.shift());

  // 다리 위에 트럭이 있으면 반복
  while (bridge_sum > 0) {
    time++;

    // 다리 위 트럭 삭제, 무게 합에서 빼기
    bridge_sum -= bridge_truck.shift();

    // 다리가 버틸 수 있는 무게 >= 다음 트럭 무게 + 다리 위 트럭 무게 && 대기 트럭이 남아있으면 -> 다음 트럭을 다리 위에 올리기
    if (weight >= bridge_sum + truck_weights[0] && truck_weights.length > 0) {
      bridge_sum += truck_weights[0];
      bridge_truck.push(truck_weights.shift());
    } else {
      // 그렇지 않으면 0을 삽입
      bridge_truck.push(0);
    }
  }
  return time;
}
