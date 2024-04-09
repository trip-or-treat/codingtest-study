# 문제 링크 : https://www.acmicpc.net/problem/15685

# 접근 방법
# 1. 핵심로직 : 기준점을 중심으로 좌표를 시계 방향으로 90도 회전시키는 로직
#     - (0,0) 중심으로 각 방향의 좌표를 그림으로 그려서 회전좌표 관계 파악
#     - 문제에서 제시한 좌표 방향을 사용하지 않으면 틀림
# 2. 주어진 세대만큼 커브의 좌표를 모두 담는 curve 함수 구현
# 3. 주어진 좌표 기준으로 x+1, y+1, x+1,y+1 의 값이 모두 1인지 확인하는 check 함수 구현

# 풀이 코드
graph = [[0] * 101 for _ in range(101)]
n = int(input())

dx = [1,0,-1,0]
dy = [0,-1,0,1]

def curve(x, y, d, g):
    dragon = [(x,y), (x+dx[d], y+dy[d])]
    while g > 0:
        c_x, c_y = dragon[-1]
        search = dragon[-2::-1]
        tmp = []
        for i,j in search:
            r_x, r_y = i - c_x, j - c_y
            r_x, r_y = -r_y + c_x, r_x + c_y
            tmp.append((r_x,r_y))
        for k in tmp:
            dragon.append(k)
        g -= 1
    for a, b in dragon:
        graph[a][b] = 1

def check(x,y):
    if x + 1 > 100 or y + 1 > 100:
        return False
    if graph[x+1][y] == graph[x][y+1] == graph[x+1][y+1] == 1:
        return True
    return False

for _ in range(n):
    x, y, d, g = map(int,input().split())
    curve(x,y,d,g)

ans = 0
for i in range(100):
    for j in range(100):
        if graph[i][j] == 1:
            if check(i,j):
                ans += 1
print(ans)

