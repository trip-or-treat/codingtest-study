# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150368

# 접근 방법
# 1. 각 이모티콘의 할인율 조합을 모두 구해서 완전탐색해도 시간 초과가 발생하지 않음

# 풀이 코드
from itertools import product


def solution(users, emoticons):
    answer = []
    users.sort()
    for p in product([10, 20, 30, 40], repeat=len(emoticons)):
        plus, total = 0, 0
        for user in users:
            buy = 0
            for idx, discount in enumerate(p):
                if discount >= user[0]:
                    buy += emoticons[idx] * ((100 - discount) / 100)

            if buy >= user[1]:
                plus += 1
            else:
                total += buy

        answer.append((plus, total))
    answer.sort(key=lambda x: (-x[0], -x[1]))

    return answer[0]