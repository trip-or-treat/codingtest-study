import java.io.*;
import java.util.*;

public class B_2606 {
    static int N, C;
    static List<List<Integer>> adj;
    static boolean[] visited;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        C = Integer.parseInt(br.readLine());

        // 인접리스트
        adj = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            adj.add(new ArrayList<>());
        }

        for (int i = 0; i < C; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            // 양방향 인접리스트
            adj.get(a).add(b);
            adj.get(b).add(a);
        }

        visited = new boolean[N + 1];
        int answer = BFS();

        System.out.println(answer);
    }

    public static int BFS() {
        Queue<Integer> q = new LinkedList<>();
        q.add(1);
        visited[1] = true;

        int count = 0;
        while (!q.isEmpty()) {
            int cur = q.poll();

            for (int next : adj.get(cur)) {
                if (!visited[next]) {
                    visited[next] = true;
                    q.add(next);
                    count++;
                }
            }
        }

        return count;
    }
}