# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/258711

# 접근 방법
# 1. 도넛 모양 그래프는 탐색 시작 노드로 돌아오는 노드가 반드시 1개 존재한다
# 2. 막대 모양 그래프는 다음 탐색할 수 있는 노드가 0개인 노드가 반드시 1개 존재한다(마지막 노드)
# 3. 8자 모양 그래프는 다음 탐색할 수 있는 노드가 2개인 노드가 반드시 1개 존재한다(8자 모양의 중앙 노드)
# 4. 각 그래프를 잇는 간선은 이동할 수 있는 노드의 개수가 최대인 노드를 찾으면 된다. 단, 최대가 2인 경우 8자 모양 그래프와 구분할 수 있어야 함
#     이를 구분하기 위해서는 '해당 노드로 이동하는 연결된 노드가 없는 경우' 와 '해당 노드에서 이동 가능한 노드의 개수가 최대인 것'을 판단

# 풀이 코드
import sys

sys.setrecursionlimit(10 ** 6)


def solution(edges):
    def check(start, tmp):
        if not graph[tmp]:
            answer[2] += 1
            return

        if len(graph[tmp]) == 2:
            answer[3] += 1
            return

        for node in graph[tmp]:
            if start == node:
                answer[1] += 1
                return

            check(start, node)

    answer = [0, 0, 0, 0]
    graph = [[] for _ in range(1000001)]
    visited = [0] * 1000001

    for a, b in edges:
        graph[a].append(b)
        visited[b] = 1

    max_cnt = 0
    for i in range(len(graph)):
        if len(graph[i]) > max_cnt and not visited[i]:
            answer[0] = i
            max_cnt = len(graph[i])

    for i in graph[answer[0]]:
        check(i, i)

    return answer
