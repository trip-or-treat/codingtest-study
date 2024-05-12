# 문제 링크 : https://www.acmicpc.net/problem/1937

# 접근 방법
# 1. 단순 BFS로 모든 좌표를 완전탐색하면 시간초과 발생
# 2. 이동이 가능한 다음 좌표의 최대 이동횟수를 저장해두고, 이 값을 이용해 계산

# 풀이 코드
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

dx = [1,-1,0,0]
dy = [0,0,1,-1]

n = int(input())
graph = [list(map(int,input().split())) for _ in range(n)]
check = [[0] * n for _ in range(n)]

def dfs(x,y):
    if check[x][y]:
        return check[x][y]

    check[x][y] = 1
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < n:
            if graph[nx][ny] > graph[x][y]:
                check[x][y] = max(check[x][y], dfs(nx,ny) + 1)
    return check[x][y]


for i in range(n):
    for j in range(n):
        if not check[i][j]:
            dfs(i,j)

result = 0
for i in check:
    result = max(result, max(i))
print(result)