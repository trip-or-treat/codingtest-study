# 문제 링크 : https://www.acmicpc.net/problem/1062

# 접근 방법
# 1. 모든 단어에 "anta"와 "tica"가 반드시 포함되므로, 해당 단어에 포함된 글자들은 필수로 학습해야함
# 2. 따라서 학습이 가능한 k개의 글자 중 기본 글자인(a,n,t,i,c) 5개는 제외해야 함
# 3. 26개의 알파벳 중 기본 글자인 5개를 제외한 21개에서 특정 개수만큼 뽑는 경우의 수는 조합으로 계산 가능
# 4. 21개 중 절반 가량인 10개를 뽑는 케이스가 경우의 수가 가장 큰데, 이는 시간복잡도 연산 안에 커버가 가능하므로 사용 가능
# 5. 다만 조합 로직 수행이 불필요한 경우를 잘 구분지어서 최대한 연산을 줄여야함

# 풀이 코드
from itertools import combinations
import sys
input = sys.stdin.readline

n, k = map(int,input().split())
learned = {"a","n","t","i","c"}
candidates = []
new_words = set()
tmp = 0
for _ in range(n):
    word = set(input().strip())
    if len(word) == 5:
        tmp += 1
        continue

    if len(word) > k:
        continue
    # 5 < len(word) <= k 인 word만 후보에 저장
    new = word - learned #기본 글자(learned)를 제외한 새로운 글자 set
    candidates.append(new)#한 단어당 새로운 글자 set 후보로 저장
    new_words.update(new) #새로운 글자들 모음


if k < 5:
    print(0)
elif len(candidates) == 0:
    print(tmp)
elif len(new_words) <= k - 5:
    print(tmp + len(candidates))
else:
    result = 0
    for combination in combinations(new_words, k - 5):
        cnt = 0
        c = set(combination)
        for candidate in candidates:
            if c.issuperset(candidate):
                cnt += 1
        result = max(result, cnt)
    print(result + tmp)