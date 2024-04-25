# 문제 링크 : https://www.acmicpc.net/problem/1806

# 접근 방법
# 1. 2중 for문을 이용해 모든 경우의 수를 탐색하는 방법, 투 포인터를 이용하는 방법이 있다.
# 2. 시간복잡도 : 시간 제한이 0.5초이므로 완전 탐색은 불가능, 투 포인터를 활용해야함
# 3. 부분합이 s보다 작을 때에 오른쪽 포인터가 최댓값(n)에 도달했다면, 부분합은 더 이상
# s보다 커질 수 없으므로 종료 조건으로 사용

# 풀이 코드
import sys
input = sys.stdin.readline

n, s = map(int,input().split())
arr = list(map(int,input().split()))

left, right, sum = 0, 0, 0
result = n+1

while True:
    if sum >= s:
        result = min(result, right-left)
        sum -= arr[left]
        left += 1
    elif right == n:
        break
    else:
        sum += arr[right]
        right += 1

if result == n+1:
    print(0)
else:
    print(result)