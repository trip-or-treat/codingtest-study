// 1. 순서대로 순회하기 위해 lost, reserve를 정렬합니다.

// 2. lost를 순회하면서 아래의 조건이 맞는다면 lost, reserve에서 해당학생 숫자를 제거합니다.
// 2-1. 현재학생이 잃어버림 + 현재학생이 여별옷이 있는 경우
// 2-2. 이전학생이 잃어버리지 않음 + 이전학생이 여별옷이 있는 경우
// 2-3. 다음학생이 잃어버리지 않음 + 다음학생이 여별옷이 있는 경우

// 3. 총학생(n)에서 잃어버린 학생수(lost)를 뺀값을 return 합니다.

function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();

  lost.forEach((num) => {
    if (reserve.includes(num) && lost.includes(num)) {
      lost = lost.filter((target) => target !== num);
      reserve = reserve.filter((target) => target !== num);
      return;
    }

    if (reserve.includes(num - 1) && !lost.includes(num - 1)) {
      lost = lost.filter((target) => target !== num);
      reserve = reserve.filter((target) => target !== num - 1);
      return;
    }

    if (reserve.includes(num + 1) && !lost.includes(num + 1)) {
      lost = lost.filter((target) => target !== num);
      reserve = reserve.filter((target) => target !== num + 1);
      return;
    }
  });

  return n - lost.length;
}
