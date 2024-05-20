import java.util.PriorityQueue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        PriorityQueue<Integer> q = new PriorityQueue<>((o1, o2) -> {
            int first = Math.abs(o1);
            int second = Math.abs(o2);
            if (first == second) {
                return o1 > o2 ? 1 : -1;
            }
            else
                return first-second;
        });

        for (int i = 0; i < n; i++) {
            int a = scan.nextInt();
            if(a==0) {
                if(q.isEmpty())
                    System.out.println("0");
                else
                    System.out.println(q.poll());
            } else {
                q.add(a);
            }
        }
    }
}