# 문제 링크 : https://www.acmicpc.net/problem/1051

# 풀이 코드
n, m = map(int,input().split())
graph = [list(input()) for _ in range(n)]

result = set()
for i in range(n):
    for j in range(m):
        num = graph[i][j]
        size = 1
        for k in range(j+1, m):
            if k >= m or i + k - j >= n:
                break
            if graph[i][k] == num and graph[i+k-j][j] == num and graph[i+k-j][k] == num:
                size = max((k-j+1)**2, size)
        result.add(size)
print(max(result))