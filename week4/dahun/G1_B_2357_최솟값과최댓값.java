import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B_2357 {

    static int[] minTree, maxTree;
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int length = N;
        int treeHeight = 0;
        while (length != 0) {
            length /= 2;
            treeHeight++;
        }

        int treeSize = (int) Math.pow(2, treeHeight + 1);
        minTree = new int[treeSize + 1];
        maxTree = new int[treeSize + 1];
        int leftNodeStartIndex = treeSize / 2 - 1;

        for (int i = 0; i <= treeSize; i++) {
            minTree[i] = Integer.MAX_VALUE;
            maxTree[i] = Integer.MIN_VALUE;
        }

        for (int i = leftNodeStartIndex + 1; i <= leftNodeStartIndex + N; i++) {
            int num = Integer.parseInt(bf.readLine());
            minTree[i] = num;
            maxTree[i] = num;
        }
        setTree(treeSize - 1, treeSize - 1);

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(bf.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            a = leftNodeStartIndex + a;
            b = leftNodeStartIndex + b;
            System.out.println(getMin(a, b) + " " + getMax(a, b));
        }
    }

    public static int getMin(int a, int b) {
        int min = Integer.MAX_VALUE;
        while (a <= b) {
            if (a % 2 == 1) {
                min = Math.min(min, minTree[a]);
                a++;
            }

            if (b % 2 == 0) {
                min = Math.min(min, minTree[b]);
                b--;
            }

            a /= 2;
            b /= 2;
        }

        return min;
    }

    public static int getMax(int a, int b) {
        int max = Integer.MIN_VALUE;
        while (a <= b) {
            if (a % 2 == 1) {
                max = Math.max(max, maxTree[a]);
                a++;
            }

            if (b % 2 == 0) {
                max = Math.max(max, maxTree[b]);
                b--;
            }

            a /= 2;
            b /= 2;
        }

        return max;
    }


    public static void setTree(int idx1, int idx2) {
        while (idx1 > 1) {
            minTree[idx1 / 2] = Math.min(minTree[idx1], minTree[idx1 / 2]);
            idx1--;
        }

        while (idx2 > 1) {
            maxTree[idx2 / 2] = Math.max(maxTree[idx2], maxTree[idx2 / 2]);
            idx2--;
        }
    }
}
