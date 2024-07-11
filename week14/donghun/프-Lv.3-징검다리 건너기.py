# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/64062

# 접근 방법
# 1. 슬라이딩 윈도우 or 이분탐색으로 풀이 가능
# 2. 슬라이딩 윈도우로 풀 경우 매번 윈도우 내부에서 가장 큰 값의 인덱스를 계산하는 것 대신 힙 자료구조를 이용해야 효율성 테스트 케이스를 모두 통과할 수 있음

# 풀이 코드
import sys
import heapq

MAX = sys.maxsize


def solution(stones, k):
    answer = MAX
    pq = []
    for i in range(k):
        heapq.heappush(pq, [-stones[i], i])

    i = k - 1
    while i < len(stones):
        heapq.heappush(pq, [-stones[i], i])

        while pq[0][1] < i - k + 1:
            heapq.heappop(pq)
        i += 1
        answer = min(answer, -pq[0][0])

    return answer