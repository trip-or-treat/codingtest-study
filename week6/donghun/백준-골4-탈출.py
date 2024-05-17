# 문제 링크 : https://www.acmicpc.net/problem/3055

# 접근 방법
# 1. 물을 먼저 흐르게 한 후 고슴도치를 이동시킨다

# 풀이 코드
from collections import deque

r, c = map(int,input().split())
graph = [list(input()) for _ in range(r)]

dx = [1,-1,0,0]
dy = [0,0,1,-1]

visited = [[-1] * c for _ in range(r)]
q = deque()

for i in range(r):
    for j in range(c):
        if graph[i][j] == '*':
            q.appendleft((i,j))
        if graph[i][j] == 'S':
            q.append((i,j))
            visited[i][j] = 0

while q:
    x,y = q.popleft()
    tmp = graph[x][y]
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or nx >= r or ny < 0 or ny >= c:
            continue
        if visited[nx][ny] != -1:
            continue
        if graph[nx][ny] == '*':
            continue
        if graph[nx][ny] == 'X':
            continue
        if tmp == '*' and graph[nx][ny] == 'D':
            continue
        if tmp == 'S':
            if graph[nx][ny] == 'D':
                print(visited[x][y] + 1)
                exit(0)
            else:
                visited[nx][ny] = visited[x][y] + 1
        graph[nx][ny] = tmp
        q.append((nx,ny))
print("KAKTUS")