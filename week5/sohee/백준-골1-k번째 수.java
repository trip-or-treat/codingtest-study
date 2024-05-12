import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int k = scan.nextInt();

        long start = 1, end = k;
        long ans = 0;

        while (start <= end) {
            long middle = (start+end)/2;
            long cnt =0;

            for (int i = 1; i <= n; i++) {
                cnt += Math.min(middle / i, n);
            }
            if (cnt < k) {
                start = middle + 1;
            } else {
                ans = middle;
                end = middle-1;
            }
        }
        System.out.println(ans);
    }
}
