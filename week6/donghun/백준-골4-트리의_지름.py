# 문제 링크 : https://www.acmicpc.net/problem/1967

# 접근 방법
# 1. 아무 노드에서 dfs로 가장 멀리 있는 노드를 구한다.
# 2. 해당 노드에서 다시 dfs로 트리의 또다른 끝점까지의 거리(정답)을 구한다.

# 풀이 코드
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline


n = int(input())
tree = [[] for _ in range(n+1)]

for _ in range(n-1):
    p, c, w = map(int,input().split())
    tree[p].append((c, w))
    tree[c].append((p, w))

def dfs(start, distance):
    for next, weight in tree[start]:
        if visited[next] == -1:
            visited[next] = distance + weight
            dfs(next, visited[next])

visited = [-1] * (n+1)
visited[1] = 0
dfs(1,0)

start_node = visited.index(max(visited))
visited = [-1] * (n+1)
visited[start_node] = 0
dfs(start_node, 0)

print(max(visited))