# 문제 링크 : https://www.acmicpc.net/problem/14002

# 접근 방법
# 1. 수열 A의 크기 N이 최대 1000이므로, 시간복잡도 O(n^2) 만큼의 연산이 수행되어도 문제가 없음
# 2. 따라서 완전탐색으로 각 인덱스마다 이전 인덱스들의 부분수열 크기와 비교 연산을 수행
# 3. 부분수열의 출력은 수열의 역순으로 탐색을 진행하면서 부분수열의 최대 크기를 이용해 찾음

# 풀이 코드
n = int(input())
arr = list(map(int,input().split()))
dp = [1] * n

for i in range(n):
    for j in range(i):
        if arr[i] > arr[j]:
            dp[i] = max(dp[i], dp[j] + 1)
max_len = max(dp)
print(max_len)

result = []
for i in range(n-1,-1,-1):
    if dp[i] == max_len:
        result.append(arr[i])
        max_len -= 1
    if not max_len:
        break
result.reverse()
print(*result)