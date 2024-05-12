import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        long A[][] = new long[n + 1][2];
        A[1][1] = 1;
        A[1][0] = 0;

        for (int i = 2; i <= n; i++) {
            A[i][0] = A[i - 1][1] + A[i - 1][0];
            A[i][1] = A[i - 1][0];
        }

        System.out.println(A[n][0] + A[n][1]);
    }
}