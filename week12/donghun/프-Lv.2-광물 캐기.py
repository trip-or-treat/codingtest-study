# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/172927

# 접근 방법

# 풀이 코드
from collections import deque


def solution(picks, minerals):
    hap = sum(picks)
    diggable = hap * 5

    if len(minerals) > diggable:
        minerals = minerals[:diggable]

    tmp = [[0, 0, 0] for i in range(10)]
    for i in range(len(minerals)):
        if minerals[i] == "diamond":
            tmp[i // 5][0] += 1
        elif minerals[i] == "iron":
            tmp[i // 5][1] += 1
        else:
            tmp[i // 5][2] += 1
    tmp.sort(key=lambda x: (-x[0], -x[1], -x[2]))

    answer = 0
    queue = deque([0] * picks[0] + [1] * picks[1] + [2] * picks[2])
    idx = 0
    while queue:
        if idx >= 10 or not sum(tmp[idx]):
            break

        d, i, s = tmp[idx]
        pick = queue.popleft()

        if pick == 0:
            answer += (d + i + s)
        elif pick == 1:
            answer += (d * 5 + i + s)
        else:
            answer += (d * 25 + i * 5 + s)
        idx += 1

    return answer