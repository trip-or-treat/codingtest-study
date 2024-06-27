# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/62048

# 접근 방법
# 규칙 찾는 방법 : https://hoons-dev.tistory.com/132

# 풀이 코드
import math

def solution(w,h):
    gcd = math.gcd(w, h)
    answer = w * h - (w + h - gcd)
    return answer