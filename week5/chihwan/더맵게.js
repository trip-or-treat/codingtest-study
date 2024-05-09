/*
    1. scoville을 통해 최소 heap 자료구조로 만들어 줍니다.
    2. 0번째 값 (최소값)이 k이상이 될때까지 반복해줍니다.
        2-1. 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.
        2-2. 최소값, 2번째 최소값을 추출해서 새로운 스코빌 지수를 만들어줍니다.
        2-3. 새로만든 스코빌 지수를 최소 heap 자료구조에 추가 후 heap을 정렬합니다.
    3. 2번의 과정을 1번 할때마다 count 해주고, 최종 count값을 출력합니다.
*/

function solution(scoville, K) {
  let heap = [...scoville];
  heapify(heap);

  let cnt = 0;

  while (heap[0] < K) {
    if (heap.length <= 1) {
      return -1;
    }

    const leastSpicy = heappop(heap);
    const secondLeastSpicy = heappop(heap);
    const mixedScoville = leastSpicy + secondLeastSpicy * 2;

    heappush(heap, mixedScoville);
    cnt++;
  }

  return cnt;
}

// 역으로 순회하는게 더 효율적이라고 함
function heapify(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    bubbleDown(arr, i);
  }
}

function bubbleDown(arr, idx) {
  const leftNodeIdx = 2 * idx;
  const rightNodeIdx = 2 * idx + 1;
  let rootNodeIdx = idx;

  // 루트와 왼쪽 비교해서 더 작은 친구를 루트로 변경
  if (arr[leftNodeIdx] < arr[rootNodeIdx]) {
    rootNodeIdx = leftNodeIdx;
  }

  // 루트와 오른쪽 비교해서 더 작은 친구를 루트로 변경
  if (arr[rightNodeIdx] < arr[rootNodeIdx]) {
    rootNodeIdx = rightNodeIdx;
  }

  // 부모, 자식 노드를 바꿔주고, 다시 bubbleDown 실행
  if (rootNodeIdx !== idx) {
    [arr[idx], arr[rootNodeIdx]] = [arr[rootNodeIdx], arr[idx]];
    bubbleDown(arr, rootNodeIdx);
  }
}

function heappop(arr) {
  const poped = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  bubbleDown(arr, 0);
  return poped;
}

function heappush(arr, newNode) {
  arr.push(newNode);
  bubbleUp(arr, arr.length - 1);
}

function bubbleUp(arr, idx) {
  while (idx > 0) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (arr[idx] < arr[parentIdx]) {
      [arr[idx], arr[parentIdx]] = [arr[parentIdx], arr[idx]];
      idx = parentIdx;
    } else {
      break;
    }
  }
}
