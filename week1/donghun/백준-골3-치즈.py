# 문제 링크 : https://www.acmicpc.net/problem/2638

# 접근 방법
# 1. 치즈 내부에 있는 공간은 공기와 접촉하지 못하기 때문에 치즈 바깥 공기 부분부터 bfs 탐색하는 것이 핵심 로직(관련 문제 : 백준 2636번 치즈)
# 2. bfs탐색 중 외부 공기와 접촉한 치즈인 경우에는 cheese + 1(이 경우 다음 좌표를 큐에 추가하지 않음), 외부 공기이면서 처음 방문한 경우 방문 표시만 함
# 3. bfs탐색 완료된 후, cheese 리스트를 탐색하며 cheese가 3 이상인 경우(기본 치즈값 1 + 외부 공기 접촉면이 2개 이상) 0으로 바꾸고 1~2면 다시
# 기본 치즈값인 1로 변경한다(공기 접촉면적 초기화)
# 4. flag 변수를 이용해 cheese 리스트 완전 탐색 이후 치즈가 존재하지 않으면 종료

# 풀이 코드
from collections import deque

dx = [1,-1,0,0]
dy = [0,0,1,-1]

def bfs(i,j):
    q = deque([(i,j)])
    visited[i][j] = 1
    while q:
        x, y = q.popleft()
        for dir in range(4):
            nx = x + dx[dir]
            ny = y + dy[dir]
            if 0 <= nx < n and 0 <= ny < m:
                if cheese[nx][ny]:
                    cheese[nx][ny] += 1
                if not cheese[nx][ny] and not visited[nx][ny]:
                    visited[nx][ny] = 1
                    q.append((nx,ny))



n, m = map(int,input().split())
cheese = [list(map(int,input().split())) for _ in range(n)]

cnt = 0
while True:
    visited = [[0] * m for _ in range(n)]
    bfs(0,0)
    flag = True
    for i in range(n):
        for j in range(m):
            if cheese[i][j] >= 3:
                cheese[i][j] = 0
            if cheese[i][j]:
                flag = False
                cheese[i][j] = 1

    cnt += 1
    if flag:
        print(cnt)
        break