# 문제 링크 : https://www.acmicpc.net/problem/15684

# 접근 방법
# 1.가로선 개수의 최솟값을 구해야 하고, 가로선을 두어야 할 위치를 특정할 수 없기 때문에
# 임의로 가로선을 두었다가 빼는 백트래킹 방식으로 풀어야 함
# 2.모든 경우의 수를 탐색하면 시간 초과가 발생하므로 조건을 벗어나면 추가 연산을 중지하도록
# 제약 조건을 잘 넣어야 함

# 풀이 코드
import sys
input = sys.stdin.readline

n, m, h = map(int,input().split())
graph = [[0] * n for _ in range(h)]
for i in range(m):
    x, y = map(int,input().split())
    graph[x-1][y-1] = 1

def check():
    for i in range(n):
        start = i
        for j in range(h):
            if graph[j][start] == 1:
                start += 1
            elif start > 0 and graph[j][start-1] == 1:
                start -= 1
        if i != start:
            return False
    return True

def backtracking(cnt, x):
    global answer
    if answer <= cnt:
        return

    if check():
        answer = min(answer, cnt)
        return

    if cnt == 3:
        return

    for i in range(x, h):
        for j in range(n-1):
            if graph[i][j] == 0:
                graph[i][j] = 1
                backtracking(cnt+1, i)
                graph[i][j] = 0

answer = 4
backtracking(0, 0)
if answer > 3:
    print(-1)
else:
    print(answer)