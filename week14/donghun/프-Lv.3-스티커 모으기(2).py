# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12971

# 접근 방법
# 1. dp 문제

# 풀이 코드
def solution(sticker):
    answer = 0
    size = len(sticker)

    if size == 1:
        return sticker[0]

    dp = [[0, 0] for _ in range(size)]

    dp[0][0] = sticker[0]
    dp[1][0] = sticker[0]
    dp[1][1] = sticker[1]

    for i in range(2, size):
        dp[i][0] = max(dp[i - 2][0] + sticker[i], dp[i - 1][0])
        dp[i][1] = max(dp[i - 2][1] + sticker[i], dp[i - 1][1])

    return max(dp[-1][1], dp[-2][0])