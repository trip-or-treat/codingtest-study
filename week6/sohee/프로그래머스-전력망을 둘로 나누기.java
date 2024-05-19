import java.util.LinkedList;
import java.util.Queue;
class Solution {
    private static int[][] map;
    public int solution(int n, int[][] wires) {
        map = new int[n+1][n+1];
        for (int[] wire : wires) {
            final int x = wire[0];
            final int y = wire[1];
            map[x][y] = 1;
            map[y][x] = 1;
        }

        int answer = Integer.MAX_VALUE;
        for (int[] wire : wires) {
            final int x = wire[0];
            final int y = wire[1];
            map[x][y] = 0;
            map[y][x] = 0;
            int cnt1 = bfs(x, n);
            int cnt2 = bfs(y, n);
            answer = Math.min(answer, Math.abs(cnt1-cnt2));
            map[x][y] = 1;
            map[y][x] = 1;
        }
        return answer;
    }

    private static int bfs(int v, int n) {
        boolean[] check = new boolean[n+1];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(v);
        check[v] = true;
        int cnt = 1;
        while (!queue.isEmpty()) {
            int tmp = queue.poll();
            for (int i = 1; i < n+1; i++) {
                if (map[tmp][i] == 1 && !check[i]) {
                    check[i] = true;
                    queue.add(i);
                    cnt++;
                }
            }
        }
        return cnt;
    }
}