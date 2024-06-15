/*
    [0,0] [0,1] [0,2] = 1 2 3
    [1,0] [1,1] [1,2] = 2 2 3
    [2,0] [2,1] [2,2] = 3 3 3    
    
    1. 위의 표와 같이 [x,y] 중 +1한 값 중 더 큰 값이 1차원 배열의 값이 된다.
    2. 좌표는 [(위치 / n), (위치 % n)]이 된다.
    3. 1,2의 정보에 따라 left ~ right까지 계산하여 ans에 담아준다.
*/

function solution(n, left, right) {
  const ans = [];

  for (let i = left; i <= right; i++) {
    const [x, y] = [Math.floor(i / n), i % n];
    ans.push(Math.max(x + 1, y + 1));
  }

  return ans;
}
