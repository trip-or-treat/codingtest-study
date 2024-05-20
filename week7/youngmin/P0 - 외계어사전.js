function solution(spell, dic) {
  let answer = 2;

  for (let i = 0; i < dic.length; i += 1) {
    let [hit, stop, tmp] = [0, false, ""];

    for (let j = 0; j < dic[i].length; j += 1) {
      if (tmp === dic[i][j]) continue;
      if (spell.includes(dic[i][j])) {
        hit += 1;
        tmp = dic[i][j];
      }
      if (hit === spell.length) {
        answer = 1;
        stop = true;
        break;
      }
      if (stop) break;
    }
  }

  return answer;
}

let spell = ["s", "o", "m", "d"];
let dic = ["moos", "dzx", "smm", "sunmmo", "som"];

console.log(solution(spell, dic));
