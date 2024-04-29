/*
    1. 대기트럭 배열을 순회 합니다.
        1-1. 1초를 추가합니다.
        
        1-2. 다리에 올라갈 수 있는 트럭이 최대치인경우 shift를 통해 가장 먼저 올라온 트럭을 빼줍니다.
        
        1-3. 현재 올라가있는 트럭들 + 올라갈 트럭의 총 무게를 더했을때 다리의 최대무게가 넘는다면 트럭을 올리지 않습니다
            1-3-1 0을 추가해서 트럭을 1칸 이동하도록 구현
            1-3-2 continue를 통해 따로 트럭을 추가하지 않도록 넘어갑니다.
        
            1-4. 새로운 트럭을 다리에 올려줍니다.
            1-4-1. 다리에 새로운 트럭을 올려줍니다.(push)
            1-4-2. 다리에 있는 총 트럭의 무게에 새로운 트럭의 무게를 추가합니다.
    
            2. 총 시간에 총 다리의 길이를 더해줍니다.(1초마다 트럭이 한칸씩 움직이니까)
*/

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let totalTruckWeight = 0;
  const onBridgeTrucks = [];

  while (truck_weights.length) {
    time += 1;

    if (onBridgeTrucks.length === bridge_length) {
      totalTruckWeight -= onBridgeTrucks.shift();
    }

    if (weight < totalTruckWeight + truck_weights[0]) {
      onBridgeTrucks.push(0);
      continue;
    }

    const curTruckWeight = truck_weights.shift();
    onBridgeTrucks.push(curTruckWeight);
    totalTruckWeight += curTruckWeight;
  }

  time += bridge_length;

  return time;
}
