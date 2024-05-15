function solution(genres, plays) {
  let playCountMap = new Map();
  let songNumberMap = new Map();

  // 장르 순회
  genres.forEach((genre, index) => {
    // 장르별 재생횟수 합 매핑
    playCountMap.set(
      genre,
      playCountMap.has(genre)
        ? playCountMap.get(genre) + plays[index]
        : plays[index]
    );
    // 수정한이유 => 재생횟수를 마지막에 문자열로 붙여 제대로 된 정렬이 이루어지지 않음
    // 모든 장르의 배열을 만들어 준 후 재생횟수와 노래번호 추가
    if (!songNumberMap.has(genre)) songNumberMap.set(genre, []);

    songNumberMap.get(genre).push([plays[index], index]);
  });

  // 장르별로 재생횟수가 같다면 노래번호, 재생횟수 순으로 내림차순
  songNumberMap.forEach((songNumber) => {
    songNumber.sort((a, b) => {
      const [cnt, num] = [0, 1];

      if (a[cnt] === b[cnt]) return a[num] - b[num];
      return b[cnt] - a[cnt];
    });
  });

  // 장르별 재생횟수총합 내림차순
  const procedure = [...playCountMap]
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);

  // 각 장르별 최대 2개 정답배열 추가
  const answer = [];
  const [maxCnt, songIndex] = [2, 1];
  procedure.map((genre) => {
    if (songNumberMap.get(genre)) {
      answer.push(
        ...songNumberMap
          .get(genre)
          .slice(0, maxCnt)
          .map((song) => song[songIndex])
      );
    }
  });

  return answer;
}

let genres = ["A", "B", "A"];
let plays = [5, 11, 2];

console.log(solution(genres, plays));
