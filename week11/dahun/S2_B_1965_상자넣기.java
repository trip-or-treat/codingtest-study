import java.io.*;
import java.util.*;

public class B_1965 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        int[] arr = new int[N + 1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        // B_11722의 가장긴 감소하는 부분수열을 구하는 알고리즘과 같을 줄 알았으나 다름.
        int[] DP = new int[N + 1];
        DP[1] = 1;
        for (int i = 2; i <= N; i++) {
            DP[i] = 1;
            for (int j = 1; j < i; j++) {
                if (arr[j] < arr[i]) {
                    DP[i] = Math.max(DP[i], DP[j] + 1);
                }
            }
        }

        bw.write(Arrays.stream(DP).max().getAsInt() + "\n");
        bw.flush();
        bw.close();
        br.close();
    }
}
