import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();
        int[] A = new int[n];

        for (int i = 0; i < n; i++) {
            A[i] = scan.nextInt();
        }

        Arrays.sort(A);

        int count = 0;

        for (int k = 0; k < n; k++) {
            int i = 0;
            int j = n - 1;

            while (i < j) {
                if (i == k) i++;
                if (j == k) j--;
                if (i >= j) break;

                if (A[i] + A[j] == A[k]) {
                    count++;
                    break;
                } else if (A[i] + A[j] < A[k]) {
                    i++;
                } else {
                    j--;
                }
            }
        }

        System.out.print(count);
    }
}