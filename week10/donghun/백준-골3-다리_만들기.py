# 문제 링크 : https://www.acmicpc.net/problem/2146

# 접근 방법
# 1. 각 섬을 구분지어 표시하는 bfs 실시
# 2. 각 섬마다 bfs를 돌려 다른 섬과 맞닿는 최소 거리를 계산

# 풀이 코드
from collections import deque
import sys

dx = [1,-1,0,0]
dy = [0,0,1,-1]

n = int(input())
graph = [list(map(int,input().split())) for _ in range(n)]
visited = [[False] * n for _ in range(n)]

def bfs(i,j):
    queue = deque([(i,j)])
    visited[i][j] = True
    graph[i][j] = num

    while queue:
        x, y = queue.popleft()

        for idx in range(4):
            nx = x + dx[idx]
            ny = y + dy[idx]
            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                if graph[nx][ny] == 1:
                    queue.append((nx,ny))
                    visited[nx][ny] = True
                    graph[nx][ny] = num

def bfs2(island):
    queue = deque()
    dist = [[-1] * n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            if graph[i][j] == island:
                queue.append((i,j))
                dist[i][j] = 0

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < n:
                if graph[nx][ny] != island and graph[nx][ny] != 0:
                    return dist[x][y]
                if graph[nx][ny] == 0 and dist[nx][ny] == -1:
                    dist[nx][ny] = dist[x][y] + 1
                    queue.append((nx,ny))


num = 1
for i in range(n):
    for j in range(n):
        if graph[i][j] == 1 and not visited[i][j]:
            bfs(i,j)
            num += 1

result = sys.maxsize
for i in range(1, num):
    result = min(result, bfs2(i))
print(result)