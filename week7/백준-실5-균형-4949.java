import java.io.*;
import java.util.Stack;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringBuilder sb = new StringBuilder();

        while(true) {
            Stack<Character> st = new Stack<>();
            String ss = br.readLine();

            if(ss.equals(".")) {
                break;
            }

            for(int i=0; i<ss.length(); i++) {

                char c = ss.charAt(i);

                if(c == '[' || c == '(') {
                    st.push(c);
                }

                if(c == ']') {
                    if(st.isEmpty()) {
                        st.push(c);
                        break;
                    }

                    if(st.peek() == '[') {
                        st.pop();
                    }

                    else break;
                }

                if(c == ')') {

                    if(st.isEmpty()) {
                        st.push(c);
                        break;
                    }

                    if(st.peek() == '(') {
                        st.pop();
                    }
                    else break;
                }
            }

            if(st.isEmpty()) {
                sb.append("yes\n");
            }

            else {
                sb.append("no\n");
            }


        }
        System.out.println(sb);

    }
}