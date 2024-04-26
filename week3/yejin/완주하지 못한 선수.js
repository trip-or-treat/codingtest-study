function solution(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  let loop_length = participant.length;
  // 반복문 조건 안에서 길이를 지정해주는거 보다 변수로 지정하는게 빠름.

  for (let i = 0; i < loop_length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
