import java.util.Scanner;

public class B_13251 {
    public static void main(String[] args) {

        // DP 배열 구성
        int[][] DP = new int[2501][2501];
        for (int i = 0; i <= 2500; i++) {
            DP[i][0] = 1;
            DP[i][i] = 1;
            DP[i][1] = i;
        }

        for (int i = 1; i <= 2500; i++) {
            for (int j = 1; j <= 2500; j++) {
                DP[i][j] = DP[i - 1][j] + DP[i - 1][j - 1];
            }
        }

        // 입력
        Scanner sc = new Scanner(System.in);
        int color = sc.nextInt();

        int total = 0;  // 총 조약돌의 개수
        int[] colors = new int[color];    // 색 개수
        for (int i = 0; i < color; i++) {
            int num = sc.nextInt();
            colors[i] = num;
            total += num;
        }

        // 뽑는 조약돌의 개수
        int K = sc.nextInt();

        double ans = 0.0;
        for (int i = 0; i < color; i++) {
            double mul = 1;
            int temp = total;
            int cnt = K;
            while (cnt > 0) {
                mul *= (double) colors[i] / (double) temp;

                colors[i]--;
                temp--;
                cnt--;
            }

            ans += mul;
        }

        System.out.println(ans);
    }
}
