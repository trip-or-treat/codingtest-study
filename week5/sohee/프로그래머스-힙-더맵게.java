import java.util.PriorityQueue;
class Solution {
    public int solution(int[] scoville, int K) {
        int result = 0;
        PriorityQueue<Integer> q = new PriorityQueue<>();

        for(int i=0; i<scoville.length; i++)
            q.add(scoville[i]);

        while(true) {
            if(q.peek() >= K)
                break;
            if(q.size() == 1)
                return -1;

            int a = q.poll();
            int b = q.poll();

            int temp = a + b*2;
            q.add(temp);

            result++;
        }

        return result;
    }
}