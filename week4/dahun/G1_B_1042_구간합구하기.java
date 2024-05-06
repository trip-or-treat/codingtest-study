import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B_2042 {
    static int N, M, K;
    static long[] tree;

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        int treeHeight = 0;
        int length = N;
        while (length != 0) {
            length /= 2;
            treeHeight++;
        }

        int treeSize = (int) Math.pow(2, treeHeight + 1);
        int leftNodeStartIndex = treeSize / 2 - 1;
        tree = new long[treeSize + 1];
        for (int i = leftNodeStartIndex + 1; i <= leftNodeStartIndex + N; i++) {
            tree[i] = Long.parseLong(bf.readLine());
        }

        setTree(treeSize - 1);

        for (int i = 0; i < M + K; i++) {
            st = new StringTokenizer(bf.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            long c = Long.parseLong(st.nextToken());

            if (a == 1) {
                change(leftNodeStartIndex + b, c);
            } else if (a == 2) {
                b = b + leftNodeStartIndex;
                c = c + leftNodeStartIndex;
                System.out.println(getSum(b, (int) c));
            } else {
                return;
            }
        }
        bf.close();
    }

    public static void change(int index, long val) {
        long diff = val - tree[index];

        while (index > 0) {
            tree[index] += diff;
            index /= 2;
        }
    }

    public static long getSum(int a, int b) {
        long partSum = 0;

        while (a <= b) {
            if (a % 2 == 1) {
                partSum += tree[a];
                a++;
            }

            if (b % 2 == 0) {
                partSum += tree[b];
                b--;
            }

            a /= 2;
            b /= 2;
        }
        return partSum;
    }

    public static void setTree(int i) {
        while (i != 1) {
            tree[i / 2] += tree[i];
            i--;
        }
    }
}
