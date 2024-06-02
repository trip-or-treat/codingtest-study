import java.io.*;
import java.util.*;

public class B_4963 {
    static int W, H;
    static int islandCnt;
    static boolean[][] visited;
    static int[][] land;
    static final int[] dx = {-1, 1, 0, 0, -1, -1, 1, 1};
    static final int[] dy = {0, 0, -1, 1, -1, 1, -1, 1};
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        while (true) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            W = Integer.parseInt(st.nextToken());
            H = Integer.parseInt(st.nextToken());

            if (W == 0 && H == 0) break;

            land = new int[H][W];
            for (int i = 0; i < H; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j = 0; j < W; j++) {
                    land[i][j] = Integer.parseInt(st.nextToken());
                }
            }

            islandCnt = 0;
            visited = new boolean[H][W];
            for (int i = 0; i < H; i++) {
                for (int j = 0; j < W; j++) {
                    if (land[i][j] == 1 && !visited[i][j]) {
                        DFS(i, j);
                        islandCnt++;
                    }
                }
            }

            System.out.println(islandCnt);
        }
    }

    public static void DFS(int x, int y) {
        visited[x][y] = true;

        for (int i = 0; i < 8; i++) {
            int nextX = x + dx[i];
            int nextY = y + dy[i];

            if (nextX >= 0 && nextX < H && nextY >= 0 && nextY < W) {
                if (!visited[nextX][nextY] && land[nextX][nextY] == 1) {
                    DFS(nextX, nextY);
                }
            }
        }
    }
}
