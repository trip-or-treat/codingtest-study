# 문제 링크 : https://www.acmicpc.net/problem/2239

# 접근 방법
# 1. 각각의 빈 좌표에 임의의 값을 여러개 넣어보며 경우의 수를 탐색해야하므로 백트래킹 알고리즘으로 풀이
# 2. 값이 0인 좌표를 담는 zeros 리스트를 만들고, 값을 채울때마다 depth를 증가시켜 zeros 길이만큼 depth에 도달하면 모든 값이 0인 좌표를 채웠다는 의미
# 이므로 백트래킹 종료
# 3. 0,0 좌표부터 탐색을 시작하고, 대입하는 숫자도 1부터 9까지 오름차순으로 체크한다면 출력조건인 81자리의 수가 제일 작은 경우를 자동으로 만족함

# 풀이 코드
graph = []
zeros = []
for i in range(9):
    tmp = list(map(int,input()))
    for j in range(9):
        if not tmp[j]:
            zeros.append((i,j))
    graph.append(tmp)

def check(x,y,num):
    for i in range(9):
        if graph[i][y] == num:
            return False
        if graph[x][i] == num:
            return False

    x = x // 3 * 3
    y = y // 3 * 3
    for i in range(x, x+3):
        for j in range(y, y+3):
            if graph[i][j] == num:
                return False
    return True

def sudoku(depth):
    if depth >= len(zeros):
        for i in graph:
            print(''.join(map(str, i)))
        exit(0)

    nx, ny = zeros[depth]
    for i in range(1, 10):
        if check(nx,ny,i):
            graph[nx][ny] = i
            sudoku(depth+1)
            graph[nx][ny] = 0

sudoku(0)