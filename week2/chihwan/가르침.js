/*
    n : 총 문자열 개수
    k : 알파벳
    max : 최대 읽을 수 있는 단어의 수 
    isLearendWords : 배운 단어들
    sliceFrontAndBack : 문자열에서 앞 4개, 뒤 4개 단어 자른 문자열 
    checkReadWords : 단어를 읽을 수 있는지 확인하는 함수 


    1. 알파벳이 5개보다 작다면 0출력  -> 최소 'a', 'n', 't', 'i', 'c' 는 읽을 수 있어야함
    2. 모든 알파벳을 알면(26) 총 문자열 n개 출력 
    3. 'a' 부터 'z' 까지 단어들을 배우면서 읽을 수 있는 최대값을 찾아줍니다.
    4. 배운 단어들이 k-5개(최대 배울 수 있는 단어의 개수)인 경우 읽을 수 있는지 확인 합니다.
    5. 최대 읽을 수 있는 문자열의 개수를 출력합니다.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  let [n, k] = input.shift().map(Number);
  const words = [];

  for (let i = 0; i < n; i++) {
    const word = input[i][0];
    words.push(word);
  }

  const res = solution(n, k, words);
  console.log(res);
});

function solution(n, k, words) {
  if (k < 5) return '0';
  if (k === 26) return n;

  let max = 0;
  const isLearendWords = getLearnWords();
  const sliced = sliceFrontAndBack(words);

  backtracking(0, 0);

  function backtracking(alphabet, learnAlphabetCnt) {
    if (learnAlphabetCnt === k - 5) {
      max = checkReadWords(isLearendWords, sliced, n, max);
      return;
    }

    for (let i = alphabet; i < 26; i++) {
      if (isLearendWords[i] === false) {
        isLearendWords[i] = true;
        backtracking(i, learnAlphabetCnt + 1);
        isLearendWords[i] = false;
      }
    }
  }
  return max;
}

function getLearnWords() {
  const dictionary = ['a', 'n', 't', 'i', 'c'];

  const isLearendWords = Array.from({ length: 26 }, () => false);
  dictionary.forEach((word) => {
    const idx = word.charCodeAt(0) - 97;
    isLearendWords[idx] = true;
  });

  return isLearendWords;
}

function sliceFrontAndBack(words) {
  const splited = words.map((word) => {
    const sliceFront = word.slice(4);
    const slicedBack = sliceFront.substring(0, sliceFront.length - 4);
    return slicedBack;
  });

  return splited;
}

function checkReadWords(isLearendWords, splited, n, max) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let read = true;
    for (let j = 0; j < splited[i].length; j++) {
      const currenChar = splited[i].charCodeAt(j);
      if (!isLearendWords[currenChar - 97]) {
        read = false;
        break;
      }
    }
    if (read) count++;
  }
  return Math.max(max, count);
}
