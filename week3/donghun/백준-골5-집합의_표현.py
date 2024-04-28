# 문제 링크 : https://www.acmicpc.net/problem/1717

# 접근 방법
# 1. 각 숫자를 인덱스로 활용한 배열을 생성해 a인덱스와 b인덱스에 속한 집합을 합치는 방식으로
# 구현했지만 메모리 초과로 실패
# 2. union-find 알고리즘을 이용해 풀이해야함(https://ip99202.github.io/posts/%EC%9C%A0%EB%8B%88%EC%98%A8-%ED%8C%8C%EC%9D%B8%EB%93%9C(Union-Find)/)

# 풀이 코드
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n, m = map(int,input().split())
parent = [i for i in range(n+1)]

def union(a,b):
    a = find(a)
    b = find(b)

    if a == b:
        return
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

def find(a):
    if a == parent[a]:
        return a
    p = find(parent[a])
    parent[a] = p
    return parent[a]

for _ in range(m):
    o, a, b = map(int,input().split())
    if not o:
        union(a,b)
    if o:
        if find(a) == find(b):
            print("YES")
        else:
            print("NO")