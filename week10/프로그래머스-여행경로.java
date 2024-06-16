import java.util.ArrayList;
import java.util.Collections;

class Solution {
    static ArrayList<String> list = new ArrayList<String>();
    static boolean[] visited;

    public String[] solution(String[][] tickets) {
        String[] answer = {};
        visited = new boolean[tickets.length];

        int index=0;
        dfs(index, "ICN", "ICN", tickets);

        Collections.sort(list);

        answer = list.get(0).split(" ");
        return answer;
    }

    public void dfs(int index, String start, String result, String[][] tickets) {
        if(index == tickets.length) {
            list.add(result);
            return;
        }

        for(int i=0;i<tickets.length;i++) {
            if(!visited[i] && tickets[i][0].equals(start)) {
                visited[i] = true;
                dfs(index+1, tickets[i][1], result+" "+tickets[i][1], tickets);
                visited[i] = false;
            }
        }
        return;
    }
}