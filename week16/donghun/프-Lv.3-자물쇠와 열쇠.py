# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/60059

# 접근 방법
# 2차원 배열 시계방향 회전 꿀팁코드
# def rotate2(arr):
#     return list(zip(*arr[::-1]))

# 풀이 코드
def compare(board,key,x,y,M, N):
    answer = True
    # x,y는 key를 더할 시작 좌표
    # M은 키의 길이로 board에 키 전체값을 더해야한다.
    for i in range(M):
        for j in range(M):
            board[x + i][y + j] += key[i][j]

    for i in range(N):
        if not answer: break

        for j in range(N):
            if board[i+M][j+M] != 1:
                answer = False
                break
    #  더해진 board에 다시 key 빼기
    for i in range(M):
        for j in range(M):
            board[x+i][y+j] -= key[i][j]

    return answer

def solution(key, lock):

    N, M = len(lock), len(key)

    board = [[0] * (N + 2*M) for _ in range(N + 2*M)]
    for i in range(N):
        for j in range(N):
            board[M+i][M+j] = lock[i][j]

    for i in range(4):
        key = rotate(key)

        # 1에서 시작하는 이유?
        # 1에서 board의 범위는 0 ~ N+2M
        # 0부터 시작하게 되면 key랑 lock이 겹치는 부분이 하나도 없어서 의미가 없다.
        # 마찬가지로 N+M은 겹치는 부분이 없고, N+M보다 큰 경우 범위인 N+2M의 범위를 넘기기 때문에 런타임 에러 발생

        for i in range(1, N+M):
            for j in range(1, N+M):
                # board의 시작점이 i,j좌표.
                if compare(board, key, i, j, M, N):
                    return True

    return False


def rotate(key):
    n = len(key)

    rotate_key = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            rotate_key[j][n-i-1] = key[i][j]
    return rotate_key

