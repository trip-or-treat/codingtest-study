# 문제 링크 : https://www.acmicpc.net/problem/1715

# 풀이 코드
import heapq
import sys
input = sys.stdin.readline

n = int(input())
cards = []
for _ in range(n):
    card = int(input())
    heapq.heappush(cards, card)


if n == 1:
    print(0)
else:
    result = 0
    while len(cards) > 1:
        tmp = heapq.heappop(cards) + heapq.heappop(cards)
        result += tmp
        heapq.heappush(cards, tmp)
    print(result)