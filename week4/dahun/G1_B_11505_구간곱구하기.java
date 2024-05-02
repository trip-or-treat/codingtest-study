import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class B_11505 {
    static long[] tree;
    static long divideNum = 1000000007;
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        int length = N;
        int treeHeight = 0;
        while (length > 0) {
            length /= 2;
            treeHeight++;
        }

        int treeSize = (int) Math.pow(2, treeHeight + 1);
        int leftNodeStartIndex = treeSize / 2 - 1;
        tree = new long[treeSize];
        for (int i = 0; i < treeSize; i++) {
            tree[i] = 1;
        }

        // 트리 초기화
        for (int i = leftNodeStartIndex + 1; i <= leftNodeStartIndex + N; i++) {
            tree[i] = Long.parseLong(bf.readLine()) % divideNum;
        }
        setTree(treeSize - 1);

//        System.out.println(Arrays.toString(tree));

        for (int i = 0; i < M + K; i++) {
            st = new StringTokenizer(bf.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            long c = Long.parseLong(st.nextToken());

            if (a == 1) {   // 업데이트
                update(leftNodeStartIndex + b, c);
//                System.out.println(Arrays.toString(tree));
            }

            if (a == 2) {   // 구간곱 구하기
                System.out.println(getMul(leftNodeStartIndex + b, (int) (leftNodeStartIndex + c)));
            }
        }
    }

    private static void update(int idx, long val) {
        tree[idx] = val % divideNum;
        while (idx > 1) {
            if (idx % 2 == 0) {
                tree[idx / 2] = (tree[idx] * tree[idx + 1]) % divideNum;
            }
            if (idx % 2 == 1) {
                tree[idx / 2] = (tree[idx] * tree[idx - 1]) % divideNum;
            }

            idx /= 2;
        }
    }

    private static long getMul(int a, int b) {
        long mul = 1;

        while (a <= b) {
            if (a % 2 == 1) {
                mul = mul * tree[a]  % divideNum;
                a++;
            }

            if (b % 2 == 0) {
                mul = mul * tree[b] % divideNum;
                b--;
            }

            a /= 2;
            b /= 2;
        }

        return mul;
    }

    private static void setTree(int idx) {
        while (idx > 1) {
            tree[idx / 2] = tree[idx / 2] * tree[idx] % divideNum;
            idx--;
        }
    }
}
