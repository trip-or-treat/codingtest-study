function solution(keymap, targets) {
  const ans = targets.map((target) => {
    const cnt = pressKeyboard(keymap, target);
    const isWord = cnt.some((num) => num === -1);

    if (isWord) return -1;
    return cnt.reduce((a, c) => a + c, 0);
  });
  return ans;
}

function pressKeyboard(keymap, target) {
  return [...target].map((char) => {
    const sortedIndex = keymap.map((words) => words.indexOf(char)).sort((a, b) => a - b);
    const isWord = sortedIndex.every((num) => num === -1);

    if (isWord) return -1;
    return sortedIndex.filter((num) => num !== -1)[0] + 1;
  });
}
