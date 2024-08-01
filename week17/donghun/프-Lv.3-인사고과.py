# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/152995

# 접근 방법


# 풀이 코드
def solution(scores):
    answer = 1
    w_a, w_b = scores[0]
    w_score = w_a + w_b

    scores.sort(key=lambda x: (-x[0], x[1]))

    max_b = 0
    for a, b in scores:
        if w_a < a and w_b < b:
            return -1

        if b >= max_b:
            max_b = b
            if a + b > w_score:
                answer += 1

    return answer