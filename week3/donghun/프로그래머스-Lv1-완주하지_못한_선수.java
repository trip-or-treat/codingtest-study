# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=java

# 풀이 코드
import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String, Integer> map = new HashMap<>();
        String answer = "";

        for (String name : participant) {
            map.put(name, map.getOrDefault(name, 0) + 1);
        }

        for (String name : completion) {
            map.put(name, map.get(name) - 1);
        }

        for (String name : participant) {
            if (map.get(name) != 0) {
                answer = name;
                break;
            }
        }
        return answer;
    }
}