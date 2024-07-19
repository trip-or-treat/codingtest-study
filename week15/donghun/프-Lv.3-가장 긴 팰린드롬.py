# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12904

# 접근 방법
# 문자열 길이가 최대 2500이므로 부분 문자열 경우의 수를 모두 확인해보는 방식으로도 풀이 가능
# 효율성 증가를 위해 각 문자열 인덱스마다 투 포인터로 최대 팰린드럼을 구하는 방식으로도 풀이 가능

# 풀이 코드
def solution(s):
    length = len(s)
    for i in range(length, 0, -1):
        print(i)
        for j in range(0, length):
            if j+i > length:
                continue
            tmp = s[j:j+i]
            if tmp == tmp[::-1]:
                return i

