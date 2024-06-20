# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17683

# 접근 방법
# 1. #이 붙은 음과 붙지 않은 음을 구분할 수 있는 로직이 필요함
# 2. 34번 테스트케이스만 실패할 경우 문제에서 주어지지 않은 'B#'도 고려해야함(문제오류)

# 풀이 코드
dic = {'C#': 'c', 'D#': 'd', 'F#': 'f', 'G#': 'g', 'A#': 'a', 'B#': 'b'}


def change(music):
    for key, value in dic.items():
        music = music.replace(key, value)
    return music


def time_c(t):
    return int(t.split(':')[0]) * 60 + int(t.split(':')[1])


def solution(m, musicinfos):
    m = change(m)
    answer = []
    for i in musicinfos:
        start, end, name, rhythm = i.split(',')
        rhythm = change(rhythm)
        played_length = time_c(end) - time_c(start)
        rhythm_length = len(rhythm)

        q, r = played_length // rhythm_length, played_length % rhythm_length
        play = rhythm * q + rhythm[:r]

        if m in play:
            answer.append((played_length, name))

    if not answer:
        return "(None)"
    answer.sort(key=lambda x: -x[0])
    return answer[0][1]
