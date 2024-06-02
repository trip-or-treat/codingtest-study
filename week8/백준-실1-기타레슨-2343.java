import java.util.Scanner;

public class Main {
    static int n;
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();
        int m = scan.nextInt();
        int[] A = new int[n];

        int start = 0;
        int end = 0;

        for (int i = 0; i < n; i++) {
            A[i] = scan.nextInt();
            if(start<A[i]) start = A[i];
            end = end+A[i];
        }

        while (start <= end) {
            int middle = (start+end)/2;
            int sum=0;
            int count=0;
            for (int i = 0; i < n; i++) {
                if (sum + A[i] > middle) {
                    count++;
                    sum=0;
                }
                sum=sum+A[i];
            }
            if(sum!=0)
                count++;
            if (count > m)
                start = middle+1;
            else
                end = middle-1;
        }
        System.out.println(start);
    }
}