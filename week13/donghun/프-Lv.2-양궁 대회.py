# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92342

# 접근 방법
# 1. 점수를 얻는 방법 : 어피치보다 무조건 1개 더 많이 맞추기 or 아예 스킵하기
# 2. 위 방식대로 dfs를 돌아서 탐색 경우의 수를 줄여야 시간 초과가 발생하지 않음

# 풀이 코드
def solution(n, info):
    global max_gap, answer

    answer = [-1]
    score = [0] * 11
    max_gap = 0

    def compare(score):
        a, b = 0, 0
        for i in range(len(info)):
            if info[i] > 0 or score[i] > 0:
                if info[i] >= score[i]:
                    a += 10 - i
                else:
                    b += 10 - i
        return (b > a, abs(a - b))

    def dfs(L, cnt):
        global max_gap, answer

        # 마지막 인덱스를 넘어섰거나, 화살이 남지 않은 경우
        if L == 11 or cnt == 0:
            is_winner, gap = compare(score)
            if is_winner:
                # 남은 화살은 0점에 쏘기
                if cnt >= 0:
                    score[10] = cnt

                # 점수차가 더 큰 경우 새로운 결과로 교체
                if gap > max_gap:
                    max_gap = gap
                    answer = score.copy()

                # 점수차가 같은 경우 낮은 점수를 많이 맞힌 결과로 교체
                elif gap == max_gap:
                    for i in range(len(score)):
                        if answer[i] > 0:
                            max_i_1 = i
                        if score[i] > 0:
                            max_i_2 = i
                    if max_i_2 > max_i_1:
                        answer = score.copy()
            return

        # L번쨰 과녁에 어피치보다 더 많이 쏠 수 있는 경우
        if cnt > info[L]:
            score[L] = info[L] + 1
            dfs(L + 1, cnt - (info[L] + 1))
            score[L] = 0

        dfs(L + 1, cnt)

    # 그냥 스킵하는 경우
    dfs(0, n)

    return answer