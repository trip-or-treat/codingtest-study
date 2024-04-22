import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B_11404 {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(bf.readLine());
        int M = Integer.parseInt(bf.readLine());

        // 인접행렬 초기화
        long[][] bus = new long[N + 1][N + 1];
        for (int i = 0; i <= N; i++) {
            for (int j = 0; j <= N; j++) {
                if (i == j) {
                    bus[i][j] = 0;
                } else {
                    bus[i][j] = 10000001;
                }
            }
        }

        // 인접행렬 구성
        for (int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(bf.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());

            bus[a][b] = Math.min(bus[a][b], c);
        }

        // 3중 for문으로 최단거리 업데이트
        for (int K = 1; K <= N; K++) {
            for (int S = 1; S <= N; S++) {
                for (int E = 1; E <= N; E++) {
                    bus[S][E] = Math.min(bus[S][E], bus[S][K] + bus[K][E]);
                }
            }
        }

        // 출력
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= N; j++) {
                if (bus[i][j] == 10000001) {
                    System.out.print("0 ");
                } else {
                    System.out.print(bus[i][j] + " ");
                }
            }
            System.out.println();
        }
    }
}
