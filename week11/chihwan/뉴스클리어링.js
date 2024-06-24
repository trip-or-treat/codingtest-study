/*
    1. str1, str2를 문자열로만 구성되도록 2글자씩 잘라주고, 나머지는 버린다.
    2. set에 담아 중복없는 모든 글자를 구성한다.
    3. set을 순회하면서 str1에서 공통된 개수를 찾는다.
    4. set을 순회하면서 str2에서 공통된 개수를 찾는다.
    5. 교집합과 합집함을 만들고, 자카드 유사도를 만들어 출력한다.
*/

function solution(str1, str2) {
  const str1Sliced = sliced(str1);
  const str2Sliced = sliced(str2);

  const sumSet = new Set([...str1Sliced, ...str2Sliced]);

  let [union, intersection] = [0, 0];

  [...sumSet].forEach((word) => {
    let filtered1 = str1Sliced.filter((f) => word === f).length;
    let filtered2 = str2Sliced.filter((f) => word === f).length;

    union += Math.max(filtered1, filtered2);
    intersection += Math.min(filtered1, filtered2);
  });

  return sumSet.size ? Math.floor((intersection / union) * 65536) : 65536;
}

function sliced(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const sliced = str
      .slice(i, i + 2)
      .toUpperCase()
      .replace(/[^A-Z]/, '');
    if (sliced.length === 2) result.push(sliced);
  }
  return result;
}
