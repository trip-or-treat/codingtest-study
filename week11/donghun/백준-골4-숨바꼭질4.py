# 문제 링크 : https://www.acmicpc.net/problem/13913

# 접근 방법
# 1. 경로까지 저장해야 하기 때문에 다음 이동 노드를 큐에 담을때마다 현재까지의 경로도
# 포함시켜서 최소경로 도착 시 출력하도록 구현 -> 시간초과 발생
# 2. graph에 해당 노드까지 이동하는 최소 비용을 기록하는 것이 아닌, 이전 노드의 인덱스를 저장한 후
# 도착지 k에 도달했을 때 역방향으로 노드를 탐색하여 경로를 찾는 방식을 사용

# 풀이 코드
from collections import deque

n, k = map(int, input().split())
graph = [-1] * 100001
graph[n] = n
queue = deque([n])
answer = []
while queue:
    x = queue.popleft()

    if x == k:
        while x != n:
            answer.append(x)
            x = graph[x]
        answer.append(n)
        print(len(answer)-1)
        print(*answer[::-1])
        exit(0)

    for nx in (x-1, x+1, x*2):
        if 0 <= nx < 100001 and graph[nx] == -1:
            graph[nx] = x
            queue.append(nx)