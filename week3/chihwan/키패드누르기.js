/*
    1. 처음 왼손과 오른손의 위치를 *, #으로 초기화해준다.
    
    2. 1,4,7일 경우 왼손을 움직이고 위치를 초기화해준다.
    
    3. 3,6,9일 경우 오른손을 움직이고 위치를 초기화해준다.
    
    4. 2,5,8,0일 경우 왼손과 오른손을 비교해 가까운곳으로 이동해준다.
        4-1. 왼손이 가까울 경우 왼손을 움직이고, 위치를 초기화해준다.
        4-2. 오른손이 가까울 경우 왼손을 움직이고, 위치를 초기화해준다.
        4-3. 왼손과 오른손이 가까울 경우 왼손잡이인지, 오른손잡이인지에 따라 다르게 처리한다.
    
    5. 최종 움직인 기록을 출력한다.    
*/

function solution(numbers, hand) {
  const ans = [];
  const position = {
    left: '*',
    right: '#',
  };

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      position.left = number;
      ans.push('L');
    }

    if (number === 3 || number === 6 || number === 9) {
      position.right = number;
      ans.push('R');
    }

    if (number === 2 || number === 5 || number === 8 || number === 0) {
      const leftPosition = getPosition(position.left, number);
      const rightPosition = getPosition(position.right, number);

      if (leftPosition < rightPosition) {
        position.left = number;
        ans.push('L');
      }

      if (leftPosition > rightPosition) {
        position.right = number;
        ans.push('R');
      }

      if (leftPosition === rightPosition) {
        if (hand === 'left') {
          position.left = number;
          ans.push('L');
        }

        if (hand === 'right') {
          position.right = number;
          ans.push('R');
        }
      }
    }
  });

  return ans.join('');
}

function getPosition(curPosition, targetPosition) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const x = Math.abs(keypad[curPosition][0] - keypad[targetPosition][0]);
  const y = Math.abs(keypad[curPosition][1] - keypad[targetPosition][1]);

  return x + y;
}

function pressNumber(target, position, ans, hand) {
  position[hand] = target;
  ans.push(hand);

  return ans;
}
