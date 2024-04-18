import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static int[] parent;

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(bf.readLine());
        int M = Integer.parseInt(bf.readLine());

        parent = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            parent[i] = i;
        }

        StringTokenizer st = null;
        for (int i = 1; i <= N; i++) {
            st = new StringTokenizer(bf.readLine());
            for (int j = 1; j <= N; j++) {
                int idx = Integer.parseInt(st.nextToken());
                if (idx == 1) {
                    if (find(i) != find(j)) {
                        union(i, j);
                    }
                }
            }
        }

        st = new StringTokenizer(bf.readLine());
        int[] travel = new int[M + 1];
        for (int i = 1; i <= M; i++) {
            travel[i] = Integer.parseInt(st.nextToken());
        }

        boolean flag = true;
        int answer = find(travel[1]);
        for (int i = 2; i <= M; i++) {
            if (answer != find(travel[i])) {
                flag = false;
                break;
            }
        }

        if (!flag) {
            System.out.println("NO");
        } else {
            System.out.println("YES");
        }
    }

    public static void union(int a, int b) {
        if (parent[a] != parent[b]) {
            a = find(a);
            b = find(b);
        }

        if (a < b) {
            parent[a] = b;
        } else if (b < a){
            parent[b] = a;
        }
    }

    public static int find(int node) {
        if (node == parent[node]) {
            return node;
        }
        return parent[node] = find(parent[node]);
    }
}
