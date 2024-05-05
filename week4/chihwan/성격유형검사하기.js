/*
    1. 제공되는 지표를 상수화 해줍니다.
    2. 제공되는 지표를 map 자료구조에 {지표, 0} 형태로 초기화 합니다. Ex) {"A" : 0}
    3. survey를 순회하면서 choice의 숫자에 따라 map 자료구조에 점수를 담아줍니다.
        3-1. 선택한 점수가 4보다 크면 "survey오른쪽 문자 : 4-선택한 점수"로 담아줍니다.
        3-2. 선택한 점수가 4보다 작으면 "survey왼쪽 문자 : 선택한 점수-4"로 담아줍니다.
    4.제공되는 지표를 순회하면서 더 높은 점수를 가진 유형을 선택하고, MBTI를 출력합니다.
*/

function solution(survey, choices) {
  const indicator = ['RT', 'CF', 'JM', 'AN'];
  const map = initMap(indicator);
  const ans = [];

  survey.forEach((word, idx) => {
    const [left, right] = word.split('');
    const curChoiceNum = choices[idx];
    const num = Math.abs(4 - curChoiceNum);

    if (curChoiceNum < 4) map.set(left, map.get(left) ? map.get(left) + num : num);
    if (curChoiceNum > 4) map.set(right, map.get(right) ? map.get(right) + num : num);
  });

  indicator.forEach((word) => {
    const [left, right] = word.split('');
    if (map.get(left) < map.get(right)) ans.push(right);
    if (map.get(left) >= map.get(right)) ans.push(left);
  });

  return ans.join('');
}

function initMap(indicator) {
  const map = new Map();

  indicator.forEach((word) => [...word].forEach((char) => map.set(char, 0)));

  return map;
}
