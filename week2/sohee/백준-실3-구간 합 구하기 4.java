import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int num = scan.nextInt();
        int count = scan.nextInt();

        long[] sum = new long[num+1];

        for (int i = 1; i <= num; i++) {
            int number = scan.nextInt();
            sum[i] = sum[i-1] + number;
        }


        for (int k = 0; k < count; k++) {
            int i = scan.nextInt();
            int j = scan.nextInt();

            System.out.println(sum[j]-sum[i-1]);
        }
    }
}