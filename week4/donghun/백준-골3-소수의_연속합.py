# 문제 링크 : https://www.acmicpc.net/problem/1644

# 접근 방법
# 1. 소수를 빠른 시간복잡도로 구하는 방법 = 에라토스테네스의 체
# 2. 연속된 소수의 합에 대한 경우의 수이므로 순차적인 소수의 누적합을 담은 리스트에서 투포인터를 사용하면 됨

# 풀이 코드
n = int(input())
eratos = [0,0] + [1] * 1999

for i in range(2, 2001):
    for j in range(2, i):
        if i % j == 0:
            eratos[i] = 0
            break

sosu = eratos + [1] * 3998000
for i in range(2001):
    if eratos[i]:
        for j in range(2*i, 4000001, i):
            sosu[j] = 0

dp = [0]
for i in range(4000001):
    if sosu[i]:
        dp.append(dp[-1] + i)

left, right = 0, 0
tmp = 0
cnt = 0
while left <= right:
    tmp = dp[right] - dp[left]
    if tmp <= n:
        right += 1
        if tmp == n:
            cnt += 1
    else:
        left += 1

    if right == len(dp) and tmp <= n:
        break
print(cnt)