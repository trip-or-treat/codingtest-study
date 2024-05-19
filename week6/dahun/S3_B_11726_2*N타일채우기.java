import java.util.Scanner;

public class B_11726 {
    static final long mod = 10007;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        long[] DP = new long[1001];
        DP[1] = 1 % mod;
        DP[2] = 2 % mod;
        for (int i = 3; i <= 1000; i++) {
            DP[i] = (DP[i - 2] + DP[i - 1]) % mod;
        }

        System.out.println(DP[N]);
    }
}
