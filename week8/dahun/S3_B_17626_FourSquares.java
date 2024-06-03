import java.util.Scanner;

public class B_17626 {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        int[] DP = new int[N + 1];
        DP[1] = 1;

        int min = 0;
        for (int i = 2; i <= N; i++) {
            min = Integer.MAX_VALUE;

            // 현재 숫자에서 제곱수만큼 적은 숫자의 경우의 수 + 뺀 제곱수를 늘린 횟수(1)
            for (int j = 1; j * j <= i; j++) {
                int temp = i - j * j;
                min = Math.min(min, DP[temp]);
            }

            DP[i] = min + 1;
        }

        System.out.println(DP[N]);
    }
}
