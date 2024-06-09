# 문제 링크 : https://www.acmicpc.net/problem/1516

# 접근 방법
# 1. 기본적인 위상정렬의 형태를 나타내지만, 건물들의 순서에 따라 소요시간이 달라지는 것을 고려해야함

# 풀이 코드
from collections import deque

n = int(input())
graph = [[] for _ in range(n+1)]
inDegree = [0] * (n+1)
time = [0] * (n+1)
queue = deque()
answer = [0] * (n+1)

for i in range(1, n+1):
    info = list(map(int,input().split()))
    time[i] = info[0]

    for j in range(1, len(info)-1):
        pre = info[j]
        graph[pre].append(i)
        inDegree[i] += 1

for i in range(1, n+1):
    if not inDegree[i]:
        queue.append(i)

while queue:
    tmp = queue.popleft()
    answer[tmp] += time[tmp]
    for i in graph[tmp]:
        inDegree[i] -= 1
        answer[i] = max(answer[i], answer[tmp])
        if not inDegree[i]:
            queue.append(i)

for i in range(1, len(answer)):
    print(answer[i])


