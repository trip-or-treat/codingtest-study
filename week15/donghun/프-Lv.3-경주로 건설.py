# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/67259

# 접근 방법

# 풀이 코드
import heapq
import sys
MAX = sys.maxsize

dx = [1,-1,0,0]
dy = [0,0,1,-1]

def solution(board):
    n = len(board)
    cost_graph = [[[MAX] * n for _ in range(n)] for _ in range(4)]
    for i in range(4):
        cost_graph[i][0][0] = 0

    heap = [(0, 0, 0, 0), (0, 0, 0, 2)]
    while heap:
        c, x, y, d = heapq.heappop(heap)
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and not board[nx][ny]:
                cost = c + (100 if d == i else 600)
                if cost_graph[i][nx][ny] > cost:
                    cost_graph[i][nx][ny] = cost
                    heapq.heappush(heap, (cost, nx, ny, i))
    return min(cost_graph[0][n-1][n-1], cost_graph[1][n-1][n-1], cost_graph[2][n-1][n-1], cost_graph[3][n-1][n-1])