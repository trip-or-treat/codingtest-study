import java.util.Arrays;
import java.util.Scanner;

public class B_10844 {
    static final int mod = 1000000000;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        long[][] DP = new long[N + 1][10];
        for (int i = 1; i < 10; i++) {
            DP[1][i] = 1;
        }

        // D[N][H] : 길이가 N인 계단에서 H 높이로 종료되는 계단 수를 만들 수 있는 경우의 수
        for (int i = 2; i <= N; i++) {
            DP[i][0] = DP[i - 1][1];
            DP[i][9] = DP[i - 1][8];
            for (int j = 1; j <= 8; j++) {
                DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % mod;
            }
        }

        // 합을 구할 때도 나눈 나머지로 업데이트를 해준다.
        System.out.println(Arrays.stream(DP[N]).sum() % mod);
    }
}