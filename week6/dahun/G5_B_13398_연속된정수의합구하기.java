import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class B_13398 {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(bf.readLine());

        int[] A = new int[N];
        StringTokenizer st = new StringTokenizer(bf.readLine());
        for (int i = 0; i < N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }

        int[] L = new int[N];
        L[0] = A[0];
        int result = L[0];
        for (int i = 1; i < N; i++) {
            L[i] = Math.max(L[i - 1] + A[i], A[i]);
            result = Math.max(result, L[i]);
        }

        int[] R = new int[N];
        R[N - 1] = A[N - 1];
        for (int i = N - 2; i >= 0; i--) {
            R[i] = Math.max(R[i + 1] + A[i], A[i]);
        }

        for (int i = 1; i < N - 1; i++) {
            int tmp = L[i - 1] + R[i + 1];  // i번째의 A값을 제외했을때의 최대값
            result = Math.max(result, tmp);
        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        bw.write(result + "\n");
        bw.flush();
        bw.close();
        bf.close();
    }
}