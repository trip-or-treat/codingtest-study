import java.util.*;

public class B_1915 {
    static long[][] DP;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();

        long max = 0;
        DP = new long[1001][1001];  // 배열의 의미 : 현재 인덱스내에서 가장 큰 정사각형의 변의 길이
        for (int i = 0; i < n; i++) {
            String line = sc.next();
            for (int j = 0; j < m; j++) {
                DP[i][j] = Long.parseLong(String.valueOf(line.charAt(j)));

                // 1일 경우) 왼쪽, 위쪽, 왼쪽 대각선 위 중에서 가장 작은값 + 1로 업데이트
                if (DP[i][j] == 1 && i > 0 && j > 0) {
                    DP[i][j] = Math.min(DP[i - 1][j - 1], Math.min(DP[i - 1][j], DP[i][j - 1])) + 1;
                }

                // 최대값일경우
                if (max < DP[i][j]) {
                    max = DP[i][j];
                }
            }
        }

        System.out.println(max * max);
    }
}