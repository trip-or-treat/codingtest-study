# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77486

# 접근 방법
# 더 이상 추천인에게 지급할 금액이 없는 경우(이익의 10%가 0원인 경우)에도 재귀 탐색을 종료시켜야 시간초과 발생하지 않음

# 풀이 코드
def solution(enroll, referral, seller, amount):
    def distribute(idx, pay):
        d = pay // 10
        result[idx] += pay - d
        if graph[idx] == -1 or pay < 10:
            return
        distribute(graph[idx], d)

    enrolls = dict()
    for idx, e in enumerate(enroll):
        enrolls.setdefault(e, idx)

    graph = [0] * len(enroll)
    for idx, r in enumerate(referral):
        if r == '-':
            graph[idx] = -1
        else:
            graph[idx] = enrolls[r]

    result = [0] * len(enroll)
    for i in range(len(seller)):
        s, a = seller[i], amount[i] * 100
        distribute(enrolls[s], a)

    return result
