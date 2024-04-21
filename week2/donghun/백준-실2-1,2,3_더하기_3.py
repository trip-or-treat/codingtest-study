# 문제 링크 : https://www.acmicpc.net/problem/15988

# 풀이 코드
dp = [0] * 1000001
dp[1], dp[2], dp[3] = 1, 2, 4

for i in range(4, 1000001):
    dp[i] = (dp[i-3] + dp[i-2] + dp[i-1]) % 1000000009

t = int(input())
for _ in range(t):
    print(dp[int(input())])
