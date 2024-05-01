# 문제 링크 : https://www.acmicpc.net/problem/1655

# 접근 방법
# 1. 중간값을 말하려면 입력된 숫자들이 정렬되어 있어야 함
# 2. 그와 동시에 시간 제한이 매우 짧기 때문에 숫자 삽입의 시간복잡도를 생각해야하고, 삽입과 동시에
# 정렬하는 자료구조인 힙(우선순위 큐)를 사용하여 풀 수 있음
# 3. 하지만 힙은 정렬된 순서대로 pop은 가능하지만, 느슨한 정렬을 하기 때문에 인덱스를 통한 중앙값을 알 수 없음
# 4. 따라서 중앙값을 기준으로 2개의 힙(최소힙, 최대힙)을 사용해서 빠르게 중앙값을 찾아야 함

# 풀이 코드
import sys
import heapq
input = sys.stdin.readline

n = int(input())
left, right = [], []
for i in range(1, n+1):
    num = int(input())

    if len(left) == len(right):
        heapq.heappush(left, -num)
    else:
        heapq.heappush(right, num)

    if right and right[0] < -left[0]:
        left_max = -heapq.heappop(left)
        right_min = heapq.heappop(right)

        heapq.heappush(left, -right_min)
        heapq.heappush(right, left_max)

    print(-left[0])
