import java.util.Scanner;

public class B_1991 {
    static int N;
    static int[][] tree;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        sc.nextLine();

        tree = new int[26][2];
        for (int i = 0; i < N; i++) {
            String[] words = sc.nextLine().split(" ");
            int idx = words[0].charAt(0) - 'A';
            char left = words[1].charAt(0);
            char right = words[2].charAt(0);

            if (left == '.') {
                tree[idx][0] = -1;
            } else {
                tree[idx][0] = left - 'A';
            }

            if (right == '.') {
                tree[idx][1] = -1;
            } else {
                tree[idx][1] = right - 'A';
            }
        }

        preOrder(0);
        System.out.println();
        inOrder(0);
        System.out.println();
        postOrder(0);
    }

    // 전위순회
    public static void preOrder(int idx) {
        System.out.print((char) (idx + 'A'));
        if (tree[idx][0] != -1) {
            preOrder(tree[idx][0]);
        }
        if (tree[idx][1] != -1) {
            preOrder(tree[idx][1]);
        }
    }

    // 중위순회
    public static void inOrder(int idx) {
        if (tree[idx][0] != -1) {
            inOrder(tree[idx][0]);
        }
        System.out.print((char) (idx + 'A'));
        if (tree[idx][1] != -1) {
            inOrder(tree[idx][1]);
        }
    }

    // 후위순회
    public static void postOrder(int idx) {
        if (tree[idx][0] != -1) {
            postOrder(tree[idx][0]);
        }
        if (tree[idx][1] != -1) {
            postOrder(tree[idx][1]);
        }
        System.out.print((char) (idx + 'A'));
    }
}
