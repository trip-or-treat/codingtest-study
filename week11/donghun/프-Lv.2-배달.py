# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12978

# 접근 방법
# 1. 1번 노드에서 나머지 모든 노드에 대한 최소비용경로를 계산하는 문제
# 2. 모든 노드와 간선에 대한 정보를 갖고 있으므로 다익스트라 알고리즘을 사용할 수 있음

# 풀이 코드
import heapq
import sys

MAX = sys.maxsize


def solution(N, road, K):
    answer = 1
    distance = [MAX] * (N + 1)

    roads = [[] for _ in range(N + 1)]
    for a, b, c in road:
        roads[a].append((c, b))
        roads[b].append((c, a))

    pq = [(0, 1)]
    while pq:
        tmp_cost, tmp_node = heapq.heappop(pq)
        for cost, node in roads[tmp_node]:
            if tmp_cost + cost <= distance[node]:
                distance[node] = tmp_cost + cost
                heapq.heappush(pq, (distance[node], node))

    for i in distance[2:]:
        if i <= K:
            answer += 1

    return answer