import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int num = scan.nextInt();

        int sum = 1;
        int count = 1;
        int start_index = 1;
        int end_index = 1;

        while (end_index != num) {
            if (sum == num) {
                count++;
                end_index++;
                sum = sum + end_index;
            } else if (sum < num) {
                end_index++;
                sum = sum + end_index;
            } else {
                sum = sum-start_index;
                start_index++;
            }
        }

        System.out.print(count);
    }
}