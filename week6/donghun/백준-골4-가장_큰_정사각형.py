# 문제 링크 : https://www.acmicpc.net/problem/1915

# 접근 방법
# 1. 값이 1인 좌표 기준으로 최대 정사각형을 완전탐색으로 찾는다면 시간 초과 발생

# 풀이 코드
n, m = map(int,input().split())
graph = [list(map(int, input())) for _ in range(n)]

result = 0
for i in range(n):
    for j in range(m):
        if i > 0 and j > 0 and graph[i][j] == 1:
            graph[i][j] += min(graph[i][j-1], graph[i-1][j], graph[i-1][j-1])
        result = max(result, graph[i][j])
print(result**2)