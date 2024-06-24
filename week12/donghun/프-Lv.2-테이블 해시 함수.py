# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/147354

# 접근 방법
# 두 정수 간의 bitwise XOR 연산기호 : ^

# 풀이 코드
def solution(data, col, row_begin, row_end):
    data.sort(key=lambda x: (x[col - 1], -x[0]))

    S_i = 0
    for i in range(row_begin - 1, row_end):
        tmp = 0
        for j in data[i]:
            tmp += j % (i + 1)
        S_i = S_i ^ tmp

    return S_i