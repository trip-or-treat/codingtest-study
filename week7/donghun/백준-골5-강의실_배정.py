# 문제 링크 : https://www.acmicpc.net/problem/11000
import heapq

# 접근 방법


# 풀이 코드
import heapq
import sys
input = sys.stdin.readline

n = int(input())
schedule = []
for _ in range(n):
    schedule.append(list(map(int,input().split())))
schedule.sort(key= lambda x : (x[0], x[1]))

heap = [schedule[0][1]]
for i in range(1, n):
    if heap[0] <= schedule[i][0]:
        heapq.heappop(heap)
    heapq.heappush(heap, schedule[i][1])
print(len(heap))