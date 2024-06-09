# 문제 링크 : https://www.acmicpc.net/problem/1766

# 접근 방법
# 위상정렬(https://freedeveloper.tistory.com/390)

# 풀이 코드
import heapq
import sys
input = sys.stdin.readline

n, m = map(int,input().split())

answer = []
graph = [[] for _ in range(n+1)]
inDegree = [0] * (n+1)
queue = []

for _ in range(m):
    pre, next = map(int,input().split())
    # 선수 풀이문제의 리스트에 후순위 문제 추가
    graph[pre].append(next)
    # 후순위 문제의 차수 증가
    inDegree[next] += 1

# 선수 풀이문제가 없는 문제의 경우, 우선순위큐에 바로 삽입
# 1. 진입차수(inDegree)가 0인 노드를 큐에 넣는다.
for i in range(1, n+1):
    if not inDegree[i]:
        heapq.heappush(queue, i)

# 2. 큐가 빌 때까지 아래 과정 반복
# 2-1. 큐에서 원소를 꺼내 노드에서 나가는 간선을 그래프에서 제거
# 2-2. 진입차수가 0이 된 노드를 큐에 넣는다.
while queue:
    tmp = heapq.heappop(queue)
    answer.append(tmp)
    for i in graph[tmp]:
        inDegree[i] -= 1
        if not inDegree[i]:
            heapq.heappush(queue, i)

print(*answer)