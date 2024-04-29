import java.util.Scanner;

public class B_14425 {
    public static class tNode {
        tNode[] next = new tNode[26];
        boolean leaf;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();

        tNode root = new tNode();
        while (N > 0) {
            String word = sc.next();
            tNode cur = root;

            for (int i = 0; i < word.length(); i++) {
                char c = word.charAt(i);

                if (cur.next[c - 'a'] == null) {
                    cur.next[c - 'a'] = new tNode();
                }

                if (i == word.length() - 1) {
                    cur.leaf = true;
                }

                cur = cur.next[c - 'a'];
            }

            N--;
        }

        int count = 0;
        while (M > 0) {
            String word = sc.next();
            tNode cur = root;

            for (int i = 0; i < word.length(); i++) {
                char c = word.charAt(i);

                if (cur.next[c - 'a'] == null) {
                    break;
                }

                if (cur.leaf && i == word.length() - 1) {
                    count++;
                }

                cur = cur.next[c - 'a'];
            }

            M--;
        }

        System.out.println(count);
    }
}
