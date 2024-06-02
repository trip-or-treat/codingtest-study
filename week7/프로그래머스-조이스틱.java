class Solution {
    public int solution(String name) {
        int [] dist = new int[26];
        for (int i=0; i<13; ++i)
            dist[i] = i;
        for (int i=13; i<26; ++i)
            dist[i] = 26-i;

        int n = name.length();
        int best = 1000000000;
        for (int k=0; k<2; ++k) {
            int sumdiff = 0;
            for (int s=0; s<n; ++s) {
                sumdiff += dist[name.charAt(s)-'A'];
                int sumdiff2 = sumdiff;
                int cost = sumdiff + s;
                for (int i=n-1; i>s; --i) {
                    if (name.charAt(i) != 'A') {
                        sumdiff2 += dist[name.charAt(i)-'A'];
                        cost = sumdiff2 + 2*s + n - i;
                    }
                }
                best = Math.min(best, cost);
            }
            if (sumdiff == 0)
                best = 0;
            StringBuffer temp = new StringBuffer(name.substring(1));
            name = name.charAt(0) + (temp.reverse()).toString();
        }
        return best;
    }
}
