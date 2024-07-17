# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/161988

# 접근 방법

# 풀이 코드
def solution(sequence):
    length = len(sequence)
    pulse_plus = [sequence[i] if i % 2 == 0 else -sequence[i] for i in range(length)]
    pulse_minus = [-sequence[i] if i % 2 == 0 else sequence[i] for i in range(length)]

    for i in range(1, length):
        pulse_plus[i] = max(pulse_plus[i], pulse_plus[i - 1] + pulse_plus[i])
        pulse_minus[i] = max(pulse_minus[i], pulse_minus[i - 1] + pulse_minus[i])

    return max(max(pulse_plus), max(pulse_minus))