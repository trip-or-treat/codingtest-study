// key value(점수) 형태로 테이블 세팅
// 이진탐색을 위한 점수 정렬
// query 나올 수 있는 경우의 수 모두 저장
// 돌면서 이진탐색

function solution(info, query) {
  const answer = [];
  const infoMap = new Map();

  info.forEach((el) => {
    const infoStr = el.split(" ");
    const [score, condition] = [Number(infoStr.pop()), infoStr.join("-")];

    infoMap.set(
      condition,
      infoMap.has(condition)
        ? [...infoMap.get(condition), score].sort((a, b) => a - b)
        : [score]
    );
  });

  const queryCombi = (list) => {
    let [language, position, career, parsing] = list.split(" and ");
    let [food, scroe] = parsing.split(" ");

    language = language === "-" ? ["cpp", "java", "python"] : [language];
    position = position === "-" ? ["backend", "frontend"] : [position];
    career = career === "-" ? ["junior", "senior"] : [career];
    food = food === "-" ? ["chicken", "pizza"] : [food];

    const arr = [];
    for (const la of language) {
      for (const po of position) {
        for (const ca of career) {
          for (const fo of food) {
            arr.push([`${la}-${po}-${ca}-${fo}`, Number(scroe)]);
          }
        }
      }
    }

    return arr;
  };

  const binarySearch = (list, num) => {
    let [left, right] = [0, list.length - 1];

    while (left <= right) {
      let mid = ~~((left + right) / 2);
      //~~ 는 이중 NOT 의 비트 연산자 양수에 대해선 floor, 음수는 ceil과 같은 결과를 내고 더 빠르다
      // 하지만 의미가 불분명해 오해의 소지가 있어 보통은 쓰지않음.
      if (list[mid] === num) {
        while (mid > 0 && list[mid - 1] === num) mid -= 1;
        return mid;
      }

      if (list[mid] > num) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  };

  query.map((qu) => {
    const newQuList = queryCombi(qu);
    let sum = 0;

    for (const [newQu, scroe] of newQuList) {
      const pass = infoMap.get(newQu);

      sum += pass ? pass.length - binarySearch(pass, scroe) : 0;
    }

    answer.push(sum);
  });

  return answer;
}

let info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
let query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution(info, query));
