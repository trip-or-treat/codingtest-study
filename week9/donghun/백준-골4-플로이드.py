# 문제 링크 : https://www.acmicpc.net/problem/11404

# 접근 방법
# 1. 플로이드-워셜 알고리즘 기본문제
# 2. i -> j로 가는 비용을 "중간 경유지인 k를 지나서 갈 때의 비용"과 비교하는 완전탐색 로직을 구현해야함

# 풀이 코드
import sys
input = sys.stdin.readline

MAX = sys.maxsize
n = int(input())
m = int(input())

graph = [[MAX] * n for _ in range(n)]

for _ in range(m):
    a, b, c = map(int,input().split())
    graph[a-1][b-1] = min(graph[a-1][b-1], c)

for k in range(n):
    for i in range(n):
        for j in range(n):
            if i == j:
                graph[i][j] = 0
            else:
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

for i in range(n):
    for j in range(n):
        if graph[i][j] == MAX:
            print(0, end=" ")
        else:
            print(graph[i][j], end=" ")
    print()