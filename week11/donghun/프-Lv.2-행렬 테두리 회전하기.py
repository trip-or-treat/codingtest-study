# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77485

# 접근 방법
# 1. 행렬의 테두리를 따라 회전시키는 로직을 구현하는 것이 핵심
# 2. 동->남->서->북 순으로 적절한 시점에 방향을 바꾸는 방법과 상,하,좌,우 모두 반복문을 통해 회전시키는 방법이 있다.

# 풀이 코드
import sys

# 동,남,서,북
dx = [0,1,0,-1]
dy = [1,0,-1,0]


def solution(rows, columns, queries):
    graph = [[i * columns + j + 1 for j in range(columns)] for i in range(rows)]
    answer = []

    for query in queries:
        sX, sY, eX, eY = query[0]-1, query[1]-1, query[2]-1, query[3]-1
        MIN = sys.maxsize

        x, y, tmp, idx = sX, sY, graph[sX][sY], 0
        while True:
            nx = x + dx[idx]
            ny = y + dy[idx]

            if not sX <= nx <= eX or not sY <= ny <= eY:
                if idx == 3:
                    answer.append(MIN)
                    break
                idx += 1
                continue

            next = graph[nx][ny]
            graph[nx][ny] = tmp
            tmp = next

            x, y = nx, ny
            MIN = min(MIN, tmp)
    return answer
