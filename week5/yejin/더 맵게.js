// 1. 최소힙으로 최소값 빼기
// 2. 재정렬
// 3. 다음 최소값 빼고 재정렬
// 4. 스코빌 지수 구하기
// 5. 스코빌 지수 삽입 후 재정렬
// 6. 최소값이 k 이상인지 확인->미만이면 1~5 반복

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    return this.heap;
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }

  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }

  heappop() {
    const heapSize = this.size();
    if (!heapSize) return null;
    if (heapSize === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbledown();
    return value;
  }

  heappush(value) {
    this.heap.push(value);
    this.bubbleup();

    return this.heap;
  }

  bubbleup() {
    let child = this.size() - 1;
    let parent = this.getParentIdx(child);

    while (this.heap[child] < this.heap[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = this.getParentIdx(parent);
    }
  }

  bubbledown() {
    let parent = 0;
    let leftChild = this.getLeftChildIdx(parent);
    let rightChild = this.getRightChildIdx(parent);

    while (
      (leftChild <= this.size() - 1 &&
        this.heap[leftChild] < this.heap[parent]) ||
      (rightChild <= this.size() - 1 &&
        this.heap[rightChild] < this.heap[parent])
    ) {
      //왼쪽 자식이 더 크면 오른쪽 자식과 부모를 swap. 왼쪽 자식이 오른쪽보다 작아야함.
      if (
        rightChild <= this.size() - 1 &&
        this.heap[leftChild] > this.heap[rightChild]
      ) {
        this.swap(parent, rightChild);
        parent = rightChild;
      } else {
        this.swap(parent, leftChild);
        parent = leftChild;
      }
      leftChild = this.getLeftChildIdx(parent);
      rightChild = this.getRightChildIdx(parent);
    }
  }
}

function solution(scoville, K) {
  let count = 0;
  const heap = new MinHeap();
  scoville.forEach((el) => heap.heappush(el));

  while (heap.heap[0] < K && heap.size() > 1) {
    count++;
    heap.heappush(heap.heappop() + heap.heappop() * 2);
  }
  return heap.heap[0] >= K ? count : -1;
}
