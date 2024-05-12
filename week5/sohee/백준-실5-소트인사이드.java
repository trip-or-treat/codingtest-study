import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int[] A = new int[s.length()];

        for (int i = 0; i < s.length(); i++) {
            A[i] = Integer.parseInt(s.substring(i, i + 1));
        }

        for (int i = 0; i < s.length(); i++) {
            int Max = i;
            for (int j = i + 1; j < s.length(); j++) {
                if (A[j] > A[Max])
                    Max = j;
            }
            if (A[i] < A[Max]) {
                int temp = A[i];
                A[i] = A[Max];
                A[Max] = temp;
            }
        }

        for (int i = 0; i < s.length(); i++) {
            System.out.print(A[i]);
        }
    }
}
