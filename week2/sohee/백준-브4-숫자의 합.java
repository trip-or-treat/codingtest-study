import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int count = scan.nextInt();
        String num = scan.next();

        char[] number = num.toCharArray();

        int sum =0;

        for (int i = 0; i < count; i++) {
            sum+=number[i]-'0';
        }

        System.out.print(sum);
    }
}