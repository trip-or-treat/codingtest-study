# 문제 링크 : https://www.acmicpc.net/problem/17135

# 풀이 코드
import copy
from itertools import combinations
from collections import deque
import sys
input = sys.stdin.readline

dx = [0,-1,0]
dy = [-1,0,1]

n, m, d = map(int,input().split())
graph = [list(map(int,input().split())) for _ in range(n)]

def kill(archer):
    result = 0
    tmp = copy.deepcopy(graph)
    killed = [[0] * m for _ in range(n)]
    for i in range(n-1, -1, -1):
        turn = []
        for j in archer:
            q = deque([(i, j, 1)])
            while q:
                x, y, distance = q.popleft()
                if tmp[x][y]:
                    turn.append((x,y))
                    if not killed[x][y]:
                        killed[x][y] = 1
                        result += 1
                    break
                if distance < d:
                    for dir in range(3):
                        nx = x + dx[dir]
                        ny = y + dy[dir]
                        if 0 <= nx < n and 0 <= ny < m:
                            q.append((nx,ny,distance+1))

        for x,y in turn:
            tmp[x][y] = 0

    return result

answer = 0
for archers in combinations([i for i in range(m)], 3):
    answer = max(answer, kill(archers))
print(answer)
