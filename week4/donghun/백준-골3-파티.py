# 문제 링크 : https://www.acmicpc.net/problem/1238

# 접근 방법
# 1. 모든 노드에 대한 간선과 비용을 알고 있기 때문에 다익스트라 알고리즘 사용
# 2. 노드의 인접 노드 중 최소 비용인 노드를 탐색할 때 완전탐색을 사용하면 시간초과가 발생하므로
# 우선순위큐를 사용해야함

# 풀이 코드
import heapq
import sys
input = sys.stdin.readline
INF = sys.maxsize

n, m, x = map(int,input().split())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    a, b, t = map(int,input().split())
    graph[a].append((b, t))

def dijkstra(start):
    q = []
    distance = [INF] * (n+1)
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue

        for node_idx, node_cost in graph[now]:
            cost = dist + node_cost

            if distance[node_idx] > cost:
                distance[node_idx] = cost
                heapq.heappush(q, (cost, node_idx))
    return distance

result = 0
for i in range(1, n+1):
    go = dijkstra(i)
    back = dijkstra(x)
    result = max(result, go[x] + back[i])
print(result)