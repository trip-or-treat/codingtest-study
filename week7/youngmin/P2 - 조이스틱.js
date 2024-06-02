function solution(name) {
  let [answer, move] = [0, name.length - 1];
  let [a, z] = [65, 91];

  // 상하 조이스틱
  name.split("").forEach((el, index) => {
    const ascii = el.charCodeAt();
    const upDown = Math.min(ascii - a, z - ascii);

    answer += upDown;
    // 앞으로만 가는 경우 (+ 1)
    let nextIndex = index + 1;
    while (nextIndex < name.length && name[nextIndex] === "A") {
      nextIndex += 1;
    }
    // index 앞으로 쭉, name.length - nextInedex A가 아닌 문자열까지 뒤로
    // Math.min(...) 정방향, 역방향 최소거리

    move = Math.min(
      move,
      index + name.length - nextIndex + Math.min(index, name.length - nextIndex)
    );
  });

  return answer + move;
}

let name = "AAAAA";
console.log(solution(name));
