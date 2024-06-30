# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/140107

# 접근 방법
# 1. 원의 넓이 구하는 공식 활용

# 풀이 코드
def solution(k, d):
    answer = 0

    for x in range(0, d + 1, k):
        y = int((d ** 2 - x ** 2) ** 0.5)
        answer += (y // k) + 1
    return answer