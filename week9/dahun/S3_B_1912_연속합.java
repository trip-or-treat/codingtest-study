import java.io.*;
import java.util.*;

public class B_1912 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        int[] arr = new int[N];
        String[] input = br.readLine().split(" ");
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(input[i]);
        }

        int[] DP = new int[N];
        DP[0] = arr[0];
        for (int i = 1; i < N; i++) {
            DP[i] = Math.max(DP[i - 1] + arr[i], arr[i]);
        }

        bw.write(Arrays.stream(DP).max().getAsInt() + "\n");
        bw.flush();
        bw.close();
        br.close();
    }
}
