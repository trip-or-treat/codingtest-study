# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12907

# 접근 방법


# 풀이 코드
def solution(n, money):
    dp = [0] * (n + 1)
    dp[0] = 1

    for m in money:
        for price in range(m, n + 1):
            dp[price] += dp[price - m]

    return dp[-1] % 1000000007
