function solution(array) {
  var max = Math.max(...array);

  return [max, array.indexOf(max)];
}
