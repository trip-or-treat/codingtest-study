# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150369

# 접근 방법
# 1. 한 번 이동할 때 최대한 많이 배달하고, 수거해야함
# 2. 한 번 이동할 때 최대 거리는 가장 멀리 배달해야하는 집의 거리와 가장 멀리 수거해야하는 집의 거리를 비교하여 계산

# 풀이 코드
from collections import deque

def solution(cap, n, deliveries, pickups):
    def move(queue):
        distance = queue[0][0] + 1
        tmp_cnt = cap
        while queue:
            if not tmp_cnt:
                break

            idx, cnt = queue.popleft()
            if cnt >= tmp_cnt:
                cnt -= tmp_cnt
                tmp_cnt = 0
                if cnt:
                    queue.appendleft((idx, cnt))
                    break
            else:
                tmp_cnt -= cnt
        return distance

    answer = 0
    d_q = deque([d for d in sorted(enumerate(deliveries), reverse=True) if d[1]])
    p_q = deque([p for p in sorted(enumerate(pickups), reverse=True) if p[1]])

    while d_q or p_q:
        distance_d, distance_p = 0, 0

        if d_q:
            distance_d = move(d_q)

        if p_q:
            distance_p = move(p_q)

        answer += 2 * max(distance_d, distance_p)
    return answer