# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/64064

# 접근 방법
# 1. user_id와 banned_id의 각 리스트 크기가 최대 8이므로 모든 경우의 수 완전탐색 가능

# 풀이 코드
from itertools import permutations

def solution(user_id, banned_id):
    def isBanned(user_id, banned_id):
        if len(user_id) != len(banned_id):
            return False

        flag = True
        for i in range(len(banned_id)):
            if banned_id[i] == '*':
                continue
            if user_id[i] != banned_id[i]:
                flag = False
                break
        return flag

    answer = set()
    size = len(banned_id)

    for i in permutations(user_id, size):
        cnt = 0
        visited = [0] * size
        for u in i:
            for b in range(size):
                if not visited[b] and isBanned(u, banned_id[b]):
                    visited[b] = 1
                    cnt += 1
                    break

        if cnt == size:
            tmp = list(i)
            tmp.sort()
            tmp = tuple(tmp)
            if tmp not in answer:
                answer.add(tmp)

    return len(answer)