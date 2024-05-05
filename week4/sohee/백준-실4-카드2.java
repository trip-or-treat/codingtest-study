import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        Queue<Integer> myQueue = new LinkedList<>();
        int n = scan.nextInt();

        for (int i = 1; i <= n; i++) {
            myQueue.add(i);
        }

        while (myQueue.size() > 1) {
            myQueue.poll();
            myQueue.add(myQueue.poll());
        }

        System.out.println(myQueue.poll());
    }
}