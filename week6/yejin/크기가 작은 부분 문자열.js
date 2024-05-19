function solution(t, p) {
  var answer = 0;
  var tLength = t.length;
  var pLength = p.length;

  for (var i = 0; i + pLength <= tLength; i++) {
    if (+t.substr(i, pLength) <= +p) answer++;
  }

  return answer;
}
