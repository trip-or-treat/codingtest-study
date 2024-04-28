# 문제 링크 : https://www.acmicpc.net/problem/2133

# 접근 방법
# 1. 경우의 수를 그림으로 꼭 그려서 패턴을 파악해야함
# 2. n이 홀수인 경우는 타일이 완성될 수 없으므로 항상 0이다.

# 풀이 코드
n = int(input())
dp = [0 for _ in range(31)]
dp[2] = 3

for i in range(4, n+1, 2):
    dp[i] = dp[i-2] * 3 + sum(dp[:i-2]) * 2 + 2
print(dp[n])