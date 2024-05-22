import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] aarr = new int[n];
        int[] barr = new int[n];
        int[] carr = new int[n];

        int sum = 0;

        for(int i=0; i<n; i++){
            aarr[i] = sc.nextInt();
        }
        for(int i=0; i<n; i++){
            barr[i] = sc.nextInt();
            carr[i] = barr[i];
        }

        Arrays.sort(aarr);
        Arrays.sort(carr);

        for(int i=0; i<n; i++){
            sum = sum + (aarr[i] * carr[n-1-i]);
        }
        System.out.println(sum);
    }
}