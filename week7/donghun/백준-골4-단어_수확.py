# 문제 링크 : https://www.acmicpc.net/problem/1339

# 접근 방법
# 1. 큰 자릿수 순서, 큰 자릿수에 위치한 알파벳의 개수 순서 등을 기준으로 숫자를 부여해야함
# 2. 모든 단어의 알파벳을 탐색하며 각 알파벳마다 자릿수만큼 더한 값('ABC' 중 'A'이면 100)이
# 가장 큰 순서대로 부여하면 해결

# 풀이 코드
n = int(input())
words = [list(input()) for _ in range(n)]
alphabets = {}
for word in words:
    x = len(word) - 1
    for alphabet in word:
        if alphabet in alphabets:
            alphabets[alphabet] += 10**x
        else:
            alphabets[alphabet] = 10**x
        x -= 1

sorted_alphabets = sorted(alphabets.values(), reverse=True)
result = 0
num = 9
for alphabet in sorted_alphabets:
    result += alphabet * num
    num -= 1
print(result)