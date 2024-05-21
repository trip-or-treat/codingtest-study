import java.util.Scanner;

// 문자열과 관련된 동적 계획법
public class B_9252 {
    static int[][] DP;
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String A = sc.next();
        String B = sc.next();

        // LCS는 2차원의 DP 배열 생성
        // DP 배열의 각 인덱스의 의미 : 해당 인덱스를 마지막 자리로 하는 문자열끼리의 공통 부분 수열의 길이
        DP = new int[A.length() +  1][B.length() + 1];
        for (int i = 1; i <= A.length(); i++) {
            for (int j = 1; j <= B.length(); j++) {
                // 값이 같을 경우 왼쪽 대각선위 위의값 + 1
                if (A.charAt(i - 1) == B.charAt(j - 1)) {
                    DP[i][j] = DP[i - 1][j - 1] + 1;
                } else {    // 값이 다를 경우 왼쪽, 위쪽의 값중 더 큰 값으로 업데이트
                    DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
                }
            }
        }

        // 출력
        int answer = DP[A.length()][B.length()];
        System.out.println(answer);

        // LCS 출력
        if (answer != 0) {
            Character[] arr = new Character[answer];
            int idx = arr.length - 1;

            int a = A.length();
            int b = B.length();
            while (a >= 1 && b >= 1) {
                // 값이 같을 경우 왼쪽 대각선 위로 이동
                if (A.charAt(a - 1) == B.charAt(b - 1)) {
                    arr[idx--] = A.charAt(a - 1);
                    a -= 1;
                    b -= 1;
                } else {
                    // 왼쪽, 위의 값을 비교해서 더 큰값으로 이동
                    if (DP[a - 1][b] >= DP[a][b - 1]) a -= 1;
                    else b -= 1;
                }
            }

            for (Character c : arr) {
                System.out.print(c);
            }
        }
    }
}