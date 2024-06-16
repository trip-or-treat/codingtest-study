# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43164

# 접근 방법


# 풀이 코드
def solution(tickets):
    answer = []
    visited = [False] * len(tickets)
    # 도착지는 가능한 경우 알파벳 순서가 앞서는 경로를 선택해야하므로 오름차순 정렬
    tickets.sort(key=lambda x: x[1])

    def dfs(city, path):

        # dfs의 종료조건 : 모든 티켓을 다 소모해서 경로가 완성된 경우
        if len(path) == len(tickets) + 1:
            answer.append(path)
            return

        # 방문하지 않은 경로 티켓을 탐색하고, 종료 조건을 달성하지 못하면 백트래킹
        for idx, ticket in enumerate(tickets):
            if ticket[0] == city and not visited[idx]:
                visited[idx] = True
                dfs(ticket[1], path + [ticket[1]])
                visited[idx] = False

    dfs("ICN", ["ICN"])

    # 생성된 모든 여행 경로 중 알파벳이 빠른 순서대로 정렬된 경로 반환
    return answer[0]