/*
    1. #인 부분의 위치를 각 rows, cols에 담아줍니다.
    2. rows, cols를 오름차순으로 정렬합니다.
    3. rows,cols 0번째값, 마지막 값 +1 값을 찾아 출력합니다.
*/

function solution(wallpaper) {
  const rows = [];
  const cols = [];

  wallpaper.forEach((row, i) => {
    [...row].forEach((col, j) => {
      if (col === '#') {
        rows.push(i);
        cols.push(j);
      }
    });
  });
  rows.sort();
  cols.sort();

  return [rows[0], cols[0], rows[rows.length - 1] + 1, cols[cols.length - 1] + 1];
}
