import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        int[] A = new int[n];
        int[] S = new int[n];

        for (int i = 0; i < n; i++) {
            A[i] = scan.nextInt();
        }

        for (int i = 1; i < n; i++) {
            int point = i;
            int value = A[i];
            for (int j = i - 1; j >= 0; j--) {
                if (A[j] < A[i]) {
                    point = j+1;
                    break;
                }
                if (j == 0) {
                    point=0;
                }
            }
            for (int j = i; j > point; j--) {
                A[j] = A[j - 1];
            }
            A[point] = value;
        }

        S[0] = A[0];
        for (int i = 1; i < n; i++) {
            S[i] = S[i - 1] + A[i];
        }

        int sum=0;
        for (int i = 0; i < n; i++) {
            sum = sum+S[i];
        }
        System.out.println(sum);
    }
}