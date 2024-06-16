# 문제 링크 : https://www.acmicpc.net/problem/4485

# 접근 방법
# 1. 최소 비용 경로를 찾는 문제이므로 다익스트라 알고리즘을 활용
# 2. 갱신된 경로 비용 중 다음 노드로 최소 비용 노드를 탐색하기 위해 우선순위 큐 사용

# 풀이 코드
import heapq
import sys

MAX = sys.maxsize

dx = [1,-1,0,0]
dy = [0,0,1,-1]

cnt = 0
while True:
    n = int(input())
    if not n:
        break
    cnt += 1

    graph = [list(map(int,input().split())) for _ in range(n)]
    dist = [[MAX] * n for _ in range(n)]
    dist[0][0] = graph[0][0]
    heap = []
    heapq.heappush(heap, (dist[0][0], 0, 0))

    while heap:
        distance, x, y = heapq.heappop(heap)

        if x == n-1 and y == n-1:
            print(f'Problem {cnt}: {distance}')
            break

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < n:
                cost = dist[x][y] + graph[nx][ny]
                if dist[nx][ny] > cost:
                    dist[nx][ny] = cost
                    heapq.heappush(heap, (dist[nx][ny], nx, ny))
