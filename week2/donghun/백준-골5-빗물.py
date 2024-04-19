# 문제 링크 : https://www.acmicpc.net/problem/14719

# 접근 방법

# 풀이 코드
h, w = map(int,input().split())
graph = [[0] * w for _ in range(h)]
block = list(map(int,input().split()))
for i in range(w):
    for j in range(block[i]):
        graph[j][i] = 1

result = 0
for i in range(h):
    tmp = 0
    left_wall = False
    for j in range(w):
        if graph[i][j] and not left_wall:
            left_wall = True
        if graph[i][j] and left_wall:
            result += tmp
            tmp = 0
        if not graph[i][j] and left_wall:
            tmp += 1
print(result)
