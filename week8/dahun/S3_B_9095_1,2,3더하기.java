import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class B_9095 {
    // 정수 n이 주어졌을 때 n을 1, 2, 3의 합으로 나타내는 방법의 수
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());

        int[] DP = new int [11];
        DP[1] = 1;
        DP[2] = 2;
        DP[3] = 4;

        for (int j = 4; j <= 10; j++) {
            DP[j] = DP[j - 1] + DP[j - 2] + DP[j - 3];
        }

        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            bw.write(DP[N] + "\n");
        }

        bw.flush();
        bw.close();
        br.close();
    }
}
