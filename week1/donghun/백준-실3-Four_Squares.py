# 문제 링크 : https://www.acmicpc.net/problem/17626

# 접근 방법
# 1. 주어진 시간 제한이 n의 개수에 비해 짧고 이전의 결과를 이용하여 빠르게 답을 도출해야 하므로 DP로 풀어야 함
# 2. 경우의 수를 잘 분리하면 브루트포스로도 풀이가 가능

# 풀이 코드
import sys
input = sys.stdin.readline

num = [0] * 50001
squares = []
for i in range(1, 50001):
    if i % (i**(1/2)) == 0.0:
        num[i] = 1
        squares.append(i)

for i in range(1, 50001):
    if not num[i]:
        tmp = num[i-1] + 1
        for j in squares:
            if j > i:
                break
            tmp = min(tmp, num[j] + num[i-j])
        num[i] = tmp

n = int(input())
print(num[n])