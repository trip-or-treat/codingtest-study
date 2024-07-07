# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/72412

# 접근 방법
# 1. 조합될 수 있는 모든 경우에 수를 딕셔너리의 키로 사용, 값에는 점수를 삽입
# 2. 쿼리의 조합에 맞는 키로 딕셔너리를 탐색, 오름차순 정렬된 목록을 통해 조건에 부합하는 인원수 계산
# 3. 인원수 탐색 시 이분탐색으로 효율성 통과

# 풀이 코드
def solution(info, query):
    answer = []
    data = dict()
    for a in ['cpp', 'java', 'python', '-']:
        for b in ['backend', 'frontend', '-']:
            for c in ['junior', 'senior', '-']:
                for d in ['chicken', 'pizza', '-']:
                    data[(a, b, c, d)] = []

    infos = [i.split() for i in info]
    infos.sort(key=lambda x: int(x[4]))

    for a, b, c, d, score in infos:
        for x in [a, '-']:
            for y in [b, '-']:
                for z in [c, '-']:
                    for k in [d, '-']:
                        data[(x, y, z, k)].append(int(score))

    for q in query:
        a, b, c, d, score = q.replace("and", "").split()
        length = len(data[(a, b, c, d)])
        start, end = 0, length
        while start < end:
            mid = (start + end) // 2
            if data[(a, b, c, d)][mid] >= int(score):
                end = mid
            else:
                start = mid + 1
        answer.append(length - start)

    return answer