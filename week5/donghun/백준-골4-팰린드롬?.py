# 문제 링크 : https://www.acmicpc.net/problem/10942

# 접근 방법

# 풀이 코드
import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int,input().split()))
m = int(input())
dp = [[0] * n for _ in range(n)]

for i in range(n):
    for start in range(n-i):
        end = start + i
        if start == end:
            dp[start][end] = 1
        elif arr[start] == arr[end]:
            if end == start + 1:
                dp[start][end] = 1
            elif dp[start + 1][end - 1]:
                dp[start][end] = 1

for _ in range(m):
    s, e = map(int,input().split())
    print(dp[s-1][e-1])