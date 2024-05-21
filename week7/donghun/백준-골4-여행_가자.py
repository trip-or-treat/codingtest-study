# 문제 링크 : https://www.acmicpc.net/problem/1976

# 접근 방법
# 1. 방문했던 도시도 재방문이 가능하므로, 여행 출발지점에서 갈 수 있는 모든 도시의 집합에
# 여행 계획에 포함된 도시들이 모두 포함된다면 YES, 아니면 NO

# 풀이 코드
from collections import deque

n = int(input())
m = int(input())
graph = [list(map(int,input().split())) for _ in range(n)]

plan = list(map(int,input().split()))
for i in range(len(plan)):
    plan[i] -= 1

start_node = plan[0]
plan = set(plan)
cities = {start_node}
visited = [0] * n
visited[start_node] = 1
queue = deque([start_node])

while queue:
    x = queue.popleft()
    for i in range(n):
        if graph[x][i] and not visited[i]:
            cities.add(i)
            queue.append(i)
            visited[i] = 1

if plan.issubset(cities):
    print("YES")
else:
    print("NO")
