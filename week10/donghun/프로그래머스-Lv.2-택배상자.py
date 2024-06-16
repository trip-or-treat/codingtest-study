# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131704?language=python3

# 접근 방법

# 풀이 코드
def solution(order):
    stack = []
    idx = 0
    num = 0

    while idx < len(order):
        if order[idx] > num:
            num += 1
            stack.append(num)
        elif order[idx] == stack[-1]:
            stack.pop()
            idx += 1
        else:
            return idx

    return idx
