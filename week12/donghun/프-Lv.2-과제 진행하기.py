# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/176962

# 접근 방법

# 풀이 코드
def solution(plans):
    # 과제 시작시간 오름차순 정렬
    for i in plans:
        i[1] = int(i[1][:2]) * 60 + int(i[1][3:])
        i[2] = int(i[2])
    plans.sort(key=lambda x: x[1])

    wait = []
    answer = []
    for i in range(len(plans) - 1):
        # 다음 과제 시작 전까지 완료하지 못하는 경우 wait 스택에 남은 시간 저장
        if plans[i + 1][1] < plans[i][1] + plans[i][2]:
            remain = plans[i][1] + plans[i][2] - plans[i + 1][1]
            wait.append((plans[i][0], remain))

        # 다음 과제 시작 전까지 완료함 + 시간이 남는 경우 wait 스택에 남은 과제 가능한 만큼 처리
        else:
            answer.append(plans[i][0])
            time = plans[i + 1][1] - plans[i][1] - plans[i][2]

            while wait:
                n, r = wait.pop()

                if time >= r:
                    answer.append(n)
                    time -= r
                else:
                    wait.append((n, r - time))
                    break

    # 마지막 과제는 위 반복문에서 탐색하지 못하므로 곧바로 처리
    answer.append(plans[len(plans) - 1][0])

    # wait 스택에 아직 남아있는 과제 차례대로 처리
    while wait:
        n, r = wait.pop()
        answer.append(n)

    return answer