# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42627

# 접근 방법
# 1. 현재 실행 가능한 모든 작업들 중 실행시간이 가장 짧은 작업을 먼저 실행

# 풀이 코드
import heapq

def solution(jobs):
    cnt = 0
    start = -1
    now = 0
    answer = 0
    heap = []
    while cnt < len(jobs):
        for job in jobs:
            if start < job[0] <= now:
                heapq.heappush(heap, [job[1], job[0]])

        if heap:
            tmp = heapq.heappop(heap)
            start = now
            now += tmp[0]
            answer += now - tmp[1]
            cnt += 1
        else:
            now += 1

    return answer // len(jobs)