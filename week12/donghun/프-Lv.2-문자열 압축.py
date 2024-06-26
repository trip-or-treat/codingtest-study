# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/60057

# 접근 방법
# 1. 문자열의 최대 길이가 1000이므로 문자열을 끊는 기준을 1부터 1000까지 완전탐색해도 시간초과가 발생하지 않음

# 풀이 코드
import sys
MAX = sys.maxsize

def solution(s):
    answer = MAX
    s_len = len(s)
    for i in range(1, s_len + 1):
        comp = ''
        cnt = 1
        tmp = s[0:i]
        for j in range(i, s_len + i, i):
            if tmp == s[j:j+i]:
                cnt += 1
            else:
                if cnt != 1:
                    comp += str(cnt)
                comp += tmp

                tmp = s[j:j+i]
                cnt = 1

        answer = min(answer, len(comp))
    return answer