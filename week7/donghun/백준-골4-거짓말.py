# 문제 링크 : https://www.acmicpc.net/problem/1043

# 접근 방법
# 1. 진실을 들어야 하는 사람들을 먼저 구한다

# 풀이 코드
n, m = map(int,input().split())
known = set(input().split()[1:])
parties = []

for _ in range(m):
    parties.append(set(input().split()[1:]))

for _ in range(m):
    for party in parties:
        if party & known:
            known = known.union(party)

result = 0
for party in parties:
    if party & known:
        continue
    result += 1
print(result)