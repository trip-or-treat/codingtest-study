import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();
        int m = scan.nextInt();

        int[] num = new int[n];

        for (int i = 0; i < n; i++) {
            num[i] = scan.nextInt();
        }

        Arrays.sort(num);

        int i =0;
        int j = n-1;
        int count =0;

        while (i < j) {
            if (num[i] + num[j] < m) {
                i++;
            } else if (num[i] + num[j] > m) {
                j--;
            } else {
                count++;
                i++;
                j--;
            }
        }
        System.out.println(count);
    }
}