# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49191

# 접근 방법
# 완전탐색 가능

# 풀이 코드
def solution(n, results):
    answer = 0
    winner = [set() for _ in range(n + 1)]
    loser = [set() for _ in range(n + 1)]
    for a, b in results:
        winner[b].add(a)
        loser[a].add(b)

    for i in range(1, n + 1):
        for w in winner[i]:
            loser[w].update(loser[i])
        for l in loser[i]:
            winner[l].update(winner[i])

    for i in range(1, n + 1):
        if len(loser[i]) + len(winner[i]) == n - 1:
            answer += 1

    return answer