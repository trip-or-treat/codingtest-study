# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/155651

# 접근 방법
# 1. 인덱스당 1분으로 계산하여 00:00~23:59를 기록하는 리스트 생성
# 2. 주어진 이용시간을 리스트에 모두 표시한 후 가장 많이 겹치는 부분 반환

# 풀이 코드
def solution(book_time):
    timezone = [0] * (60 * 24 + 1)
    for start, end in book_time:
        idx_s = int(start[:2]) * 60 + int(start[3:])
        idx_e = int(end[:2]) * 60 + int(end[3:]) + 10
        if idx_e >= len(timezone):
            idx_e = len(timezone)

        for i in range(idx_s, idx_e):
            timezone[i] += 1

    answer = max(timezone)
    return answer