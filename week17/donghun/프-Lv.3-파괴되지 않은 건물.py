# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92344

# 접근 방법
# 효율성 통과를 위해서는 누적합 사용

# 풀이 코드
def solution(board, skill):
    answer = 0
    n, m = len(board), len(board[0])
    accumulated_sum = [[0] * (m + 1) for _ in range(n + 1)]
    for type, r1, c1, r2, c2, degree in skill:
        if type == 1:
            degree = -degree
        accumulated_sum[r1][c1] += degree
        accumulated_sum[r2 + 1][c2 + 1] += degree
        accumulated_sum[r1][c2 + 1] -= degree
        accumulated_sum[r2 + 1][c1] -= degree

    for i in range(n + 1):
        for j in range(m):
            accumulated_sum[i][j + 1] += accumulated_sum[i][j]

    for j in range(m + 1):
        for i in range(n):
            accumulated_sum[i + 1][j] += accumulated_sum[i][j]

    for i in range(n):
        for j in range(m):
            if board[i][j] + accumulated_sum[i][j] > 0:
                answer += 1
    return answer