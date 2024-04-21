import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int num = scan.nextInt();
        int[] score = new int[num];

        for (int i = 0; i < num; i++) {
            score[i] = scan.nextInt();
        }

        int max = 0;

        for (int i = 0; i < num; i++) {
            if(score[i]>max)
                max = score[i];
        }

        int sum = 0;
        for (int i = 0; i < num; i++) {
            sum+=score[i];
        }

        System.out.print((double) sum*100/max/num);
    }
}