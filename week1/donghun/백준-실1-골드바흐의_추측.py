# 문제 링크 : https://www.acmicpc.net/problem/6588

# 접근 방법
# 1. 시간복잡도 : 시간 제한이 0.5초이므로 약 2000만 번의 연산 이내에 풀이해야 함(파이썬 기준 1초 약 4000만 번 연산 가능)
# 2. 1백만까지의 숫자 중 소수를 찾아야 하는데, 이 때 효율적인 탐색 로직이 필요함 -> 에라토스테네스의 체
# 3. decimal 리스트의 각 인덱스를 숫자값으로 생각하여 1이면 소수, 0이면 소수가 아님을 표시
# 4. decimal 리스트를 완전 탐색하며 추측 검증

# 풀이 코드
import sys
input = sys.stdin.readline

decimal = [1] * 1000001
tmp = []
for i in range(2, 1001):
    flag = True
    for j in range(1, i+1):
        if i % j == 0 and j != 1 and j != i:
            flag = False
            break
    if flag:
        tmp.append(i)
for i in tmp:
    for j in range(i*2, len(decimal), i):
        decimal[j] = 0

while True:
    even = int(input())
    if not even:
        break

    flag = False
    for i in range(3, 500001):
        if decimal[i] == 1 and decimal[even-i] == 1:
            print(f"{even} = {i} + {even-i}")
            flag = True
            break

    if not flag:
        print("Goldbach's conjecture is wrong.")
