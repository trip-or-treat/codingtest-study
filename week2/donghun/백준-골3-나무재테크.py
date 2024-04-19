# 문제 링크 : https://www.acmicpc.net/problem/16235

# 풀이 코드
from collections import deque
import sys
input = sys.stdin.readline

dx = [1,1,0,-1,-1,-1,0,1]
dy = [0,1,1,1,0,-1,-1,-1]

n,m,k = map(int,input().split())
ground = [[5] * n for _ in range(n)]
food = [list(map(int,input().split())) for _ in range(n)]
trees = [[deque() for _ in range(n)] for _ in range(n)]
result = 0

#초기 나무 심기
for _ in range(m):
    x,y,z = map(int,input().split())
    trees[x-1][y-1].append(z)

for _ in range(k):
    #봄,여름 작업
    for i in range(n):
        for j in range(n):
            for k in range(len(trees[i][j])):
                if ground[i][j] >= trees[i][j][k]:
                    ground[i][j] -= trees[i][j][k]
                    trees[i][j][k] += 1
                else:
                    for _ in range(k, len(trees[i][j])):
                        x = trees[i][j].pop()
                        ground[i][j] += x // 2
                    break
    #가을 작업
    for x in range(n):
        for y in range(n):
            for z in range(len(trees[x][y])):
                if trees[x][y][z] % 5 == 0:
                    for dir in range(8):
                        nx = x + dx[dir]
                        ny = y + dy[dir]
                        if 0 <= nx < n and 0 <= ny < n:
                            trees[nx][ny].appendleft(1)

    #겨울 작업
    for i in range(n):
        for j in range(n):
            ground[i][j] += food[i][j]

for i in range(n):
    for j in range(n):
        result += len(trees[i][j])
print(result)
