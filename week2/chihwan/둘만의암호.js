/*

1. skip 된 단어들 제외하고 a부터 z까지 단어들을 만들어줍니다. 
2. 문자열s를 순회하면서 1에서 만들어 둔 알파벳 배열들에서 index번째 뒤 단어를 찾아줍니다.

*/

function solution(s, skip, index) {
  const alphabets = getAlphabets(skip);

  return [...s]
    .map((char) => {
      const idx = alphabets.indexOf(char);
      const word = alphabets[(idx + index) % alphabets.length];
      return word;
    })
    .join('');
}

function getAlphabets(skip) {
  const alphabets = [];

  for (let i = 0; i < 26; i++) {
    alphabets.push(String.fromCharCode(i + 97));
  }

  const filtered = alphabets.filter((char) => !skip.includes(char));

  return filtered.concat(filtered);
}
