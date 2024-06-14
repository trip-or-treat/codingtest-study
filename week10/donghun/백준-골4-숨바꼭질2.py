# 문제 링크 : https://www.acmicpc.net/problem/12851

# 접근 방법


# 풀이 코드
from collections import deque
import sys
input = sys.stdin.readline

MAX = sys.maxsize

n, k = map(int,input().split())
cost = [MAX] * (100001)
cost[n] = 0
queue = deque([(cost[n], n)])
cnt = 0

while queue:
    tmp, idx = queue.popleft()

    if idx == k:
        min_cost = tmp
        cnt += 1

    for next in (idx-1, idx+1, idx*2):
        if 0 <= next <= 100000:
            if tmp + 1 <= cost[next]:
                cost[next] = min(cost[next], tmp + 1)
                queue.append((cost[next], next))

print(min_cost)
print(cnt)