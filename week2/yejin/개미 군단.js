const solution = (hp) => {
  return ~~(hp / 5) + ~~((hp % 5) / 3) + ((hp % 5) % 3);
};

// ~~ : ~를 두번 한것. Math.floor와 같은 기능을 함
// ~ : 비트 연산자. 0과 1을 서로 바꿔준다.
