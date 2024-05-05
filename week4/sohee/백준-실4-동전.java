import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int k = scan.nextInt();
        int[] A = new int[n];

        for (int i = 0; i < n; i++) {
            A[i] = scan.nextInt();
        }

        int count =0;
        for (int i = n - 1; i >= 0; i--) {
            if (A[i] <= k) {
                count += (k / A[i]);
                k = k % A[i];
            }
        }

        System.out.println(count);
    }
}
