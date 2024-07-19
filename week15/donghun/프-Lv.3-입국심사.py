# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43238

# 접근 방법

# 풀이 코드
import sys
MAX = sys.maxsize

def solution(n, times):
    s, e = 0, MAX
    while s < e:
        m = (s + e) // 2

        tmp = 0
        for time in times:
            tmp += m // time

        if tmp >= n:
            e = m
        else:
            s = m + 1

    return s