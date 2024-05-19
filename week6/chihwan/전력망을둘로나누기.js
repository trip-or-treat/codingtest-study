/*
    1. network를 만들어줍니다.
    2. wires를 순회하면서 하나씩 잘라 2개 네트워크망을 만들고, 각 네트워크의 송전탑의 개수를 비교하여 최소값을 찾습니다.
*/

function solution(n, wires) {
  let min = Number.MAX_SAFE_INTEGER;
  const network = makeNetwork(n, wires);

  wires.forEach(
    (_, idx) => (min = Math.min(min, countTowerCompareTwoNetwork(network, wires, idx, n)))
  );

  return min;
}

function makeNetwork(n, wires) {
  const network = Array.from({ length: n + 1 }, () => []);

  wires.forEach((node) => {
    let [prev, next] = node;
    network[prev].push(next);
    network[next].push(prev);
  });

  return network;
}

function countTowerCompareTwoNetwork(network, wires, index, n) {
  const secondNetwork = new Set();
  const leftTower = wires[index][0];

  secondNetwork.add(leftTower);

  for (let tower of secondNetwork) {
    network[tower].forEach((value) => {
      if (value !== wires[index][1]) secondNetwork.add(value);
    });
  }

  return Math.abs(n - secondNetwork.size * 2);
}
