/*
    1. moves를 순회하면서 각 위치마다 인형을 확인한다. 
    2. move의 위치(target)별로 아래쪽으로 확인하여 0이면 넘어가고, 0이 아니면 더 아래쪽을 확인한다. 
    3. 0이 아니면 최근에 담은 인형과 같은지 확인한다
    4. 만약 다르다면 stack 자료구조에 담아준다.
    5. 만약 같다면 stack에서 제거(pop)하고 cnt를 +2해준다.
    6. 뽑은 인형의 위치는 0으로 바꿔준다.
    7. 최종 cnt값을 출력한다. 
 */

function solution(board, moves) {
  const stack = [];
  let cnt = 0;

  moves.forEach((target) => {
    const curPosition = target - 1;

    for (let i = 0; i < board.length; i++) {
      const col = board[i];
      if (col[curPosition] === 0) continue;
      if (stack[stack.length - 1] !== col[curPosition]) stack.push(col[curPosition]);
      else {
        cnt += 2;
        stack.pop();
      }

      board[i][curPosition] = 0;
      break;
    }
  });
  return cnt;
}
