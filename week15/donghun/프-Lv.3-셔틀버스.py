# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17678

# 접근 방법
# 1. 숫자 -> 시간으로 변경할 때 1자리 수를 0으로 채우기 위해 zfill 활용할 수 있음

# 풀이 코드
import heapq

def solution(n, t, m, timetable):
    def transform(time):
        return int(time[:2]) * 60 + int(time[3:])

    start = transform("09:00") - t
    heap = []
    for i in timetable:
        heapq.heappush(heap, transform(i))

    for i in range(n):
        start += t
        answer = start
        cnt = m
        while heap:
            if heap[0] <= start and cnt:
                tmp = heapq.heappop(heap)
                cnt -= 1
            else:
                break
        if not cnt:
            answer = tmp - 1

    # result = ''
    #     hour, minute = answer // 60, answer % 60
    #     if hour < 10:
    #         result += '0'
    #     result += str(hour) + ':'

    #     if minute < 10:
    #         result += '0'
    #     result += str(minute)
    # return result
    return str(answer // 60).zfill(2) + ":" + str(answer % 60).zfill(2)