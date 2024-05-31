# 문제 링크 : https://www.acmicpc.net/problem/1202

# 접근 방법


# 풀이 코드
import heapq
import sys
input = sys.stdin.readline

n, k = map(int,input().split())
jewels = [list(map(int,input().split())) for _ in range(n)]
bags = [int(input()) for _ in range(k)]
jewels.sort()
bags.sort()

result = 0
tmp = []
for bag in bags:
    while jewels and jewels[0][0] <= bag:
        heapq.heappush(tmp, -jewels[0][1])
        heapq.heappop(jewels)
    if tmp:
        result -= heapq.heappop(tmp)
print(result)