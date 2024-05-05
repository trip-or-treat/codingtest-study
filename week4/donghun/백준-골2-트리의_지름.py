# 문제 링크 : https://www.acmicpc.net/problem/1167

# 접근 방법
# 1. 노드의 개수 제한이 10만 개 이므로 각 노드마다 모든 노드에 대한 거리를 구하면 시간초과 발생
# 2. 연산을 줄이기 위해서는 "트리에서 임의의 노드에서 최대 거리에 있는 노드는 반드시 트리의 지름의 양 끝점 중 하나이다"
# 라는 성질을 이용해야함
# 3. 임의의 노드에서 최대거리에 있는 노드를 구하면 그것은 트리의 끝점이므로, 해당 끝점을 기준으로
# 모든 노드로의 거리를 구하면 트리의 양 끝점 간의 길이를 구할 수 있음

# 풀이 코드
import sys
input = sys.stdin.readline

v = int(input())
graph = [[] for _ in range(v+1)]
for _ in range(v):
    lines = list(map(int,input().split()))
    node = lines[0]
    for i in range(1, len(lines), 2):
        if lines[i] == -1:
            break
        graph[node].append((lines[i], lines[i+1]))

def dfs(node, distance):
    for next, cost in graph[node]:
        if visited[next] == -1:
            visited[next] = distance + cost
            dfs(next, visited[next])

    return

visited = [-1] * (v+1)
visited[1] = 0
dfs(1, 0)
edge_node, max_len = 0, 0
for i in range(1, v+1):
    if visited[i] > max_len:
        edge_node = i
        max_len = visited[i]

visited = [-1] * (v+1)
visited[edge_node] = 0
dfs(edge_node, 0)
print(max(visited))