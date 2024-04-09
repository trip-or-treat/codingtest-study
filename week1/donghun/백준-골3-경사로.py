# 문제 링크 : https://www.acmicpc.net/problem/14890

# 접근 방법
# 1. 지나갈 수 있는 길인지 판별하는 함수를 하나 생성하여 재활용
# 2. 행렬의 모든 행(N), 열(N) 만큼 탐색하며 함수로 판별
# 3. 판별 함수는 통행이 불가능한 조건에 대해 검증하는 방식으로 진행

# 풀이 코드
N, L = map(int,input().split())
graph = [list(map(int,input().split())) for _ in range(N)]

def check(line):
    slope = [False] * N
    for i in range(1, N):
        if abs(line[i-1] - line[i]) > 1: #높이차가 1 초과인 경우 통행불가
            return False
        else:
            if line[i-1] - line[i] == 1: #내리막길인 케이스
                for j in range(L):
                    if i + j >= N:
                        return False
                    if line[i+j] != line[i]:
                        return False
                    if slope[i+j]:
                        return False
                    if not slope[i+j]:
                        slope[i+j] = True
            elif line[i-1] - line[i] == -1: #오르막길인 케이스
                for j in range(L):
                    if i - j - 1 < 0:
                        return False
                    if line[i-1-j] != line[i-1]:
                        return False
                    if slope[i-1-j]:
                        return False
                    if not slope[i-1-j]:
                        slope[i-1-j] = True
            #높이가 같은 경우 경사로 검증 없이 진행
    return True

result = 0
for i in range(N):
    if check(graph[i]):
        result += 1
for j in range(N):
    if check([graph[i][j] for i in range(N)]):
        result += 1
print(result)