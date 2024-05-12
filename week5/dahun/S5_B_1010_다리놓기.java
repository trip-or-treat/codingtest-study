import java.util.Arrays;
import java.util.Scanner;

public class B_1010_2 {
    public static void main(String[] args) {
        int[][] DP = new int[31][31];
        for (int i = 0; i <= 30; i++) {
            DP[i][0] = 1;
            DP[i][i] = 1;
            DP[i][1] = i;
        }

        for (int i = 1; i <= 30; i++) {
            for (int j = 1; j <= 30; j++) {
                DP[i][j] = DP[i - 1][j] + DP[i - 1][j - 1];
            }
        }

        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int i = 0; i < T; i++) {
            int N = sc.nextInt();
            int M = sc.nextInt();

            System.out.println(DP[M][N]);
        }
    }
}
