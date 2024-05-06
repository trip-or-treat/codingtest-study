import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class B_10868 {
    static int[] tree;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int length = N;
        int treeHeight = 0;
        while (length > 0) {
            length /= 2;
            treeHeight++;
        }

        int treeSize = (int) Math.pow(2, treeHeight + 1);
        tree = new int[treeSize + 1];
        Arrays.fill(tree, Integer.MAX_VALUE);

        int leftNodeStartIndex = treeSize / 2 - 1;
        for (int i = leftNodeStartIndex + 1; i <= leftNodeStartIndex + N; i++) {
            tree[i] = Integer.parseInt(br.readLine());
        }
        setTree(treeSize - 1);

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            System.out.println(getMin(leftNodeStartIndex + a, leftNodeStartIndex + b));
        }
    }

    private static long getMin(int a, int b) {
        long answer = Integer.MAX_VALUE;

        while (a <= b) {
            if (a % 2 == 1) {
                answer = Math.min(tree[a], answer);
                a++;
            }

            if (b % 2 == 0) {
                answer = Math.min(tree[b], answer);
                b--;
            }

            a /= 2;
            b /= 2;
        }

        return answer;
    }

    private static void setTree(int idx) {
        while (idx > 1) {
            if (tree[idx / 2] > tree[idx]) {
                tree[idx / 2] = tree[idx];
            }
            idx--;
        }
    }
}
