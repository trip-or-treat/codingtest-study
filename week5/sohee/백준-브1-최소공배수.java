import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();

        for (int i = 0; i < t; i++) {
            int a = scan.nextInt();
            int b = scan.nextInt();
            int result = a * b / gcd(a, b);
            System.out.println(result);
        }
    }

    public static int gcd(int a, int b) {
        if (b==0)
            return a;
        else
            return gcd(b, a % b);
    }
}
