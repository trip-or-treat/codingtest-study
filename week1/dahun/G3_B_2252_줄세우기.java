import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            adj.add(new ArrayList<>());
        }

        int[] D = new int[N + 1];
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(bf.readLine());
            int A = Integer.parseInt(st.nextToken());
            int B = Integer.parseInt(st.nextToken());

            D[B] += 1;
            adj.get(A).add(B);
            adj.get(B).add(A);
        }

        boolean[] visited = new boolean[N + 1];
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int i = 1; i <= N; i++) {
            if (D[i] == 0) {
                pq.add(i);
                visited[i] = true;
            }
        }

        while (!pq.isEmpty()) {
            int cur = pq.poll();
            System.out.print(cur + " ");

            for (int next : adj.get(cur)) {
                D[next]--;
            }

            for (int i = 1; i <= N; i++) {
                if (D[i] == 0 && !visited[i]) {
                    pq.add(i);
                    visited[i] = true;
                }
            }
        }
    }
}
