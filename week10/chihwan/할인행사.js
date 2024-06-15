/*
    1. [want, number]의 형태로 map자료구조를 만들어 줍니다.
    2. discount를 순회하면서 (현재 음식 + 10개)를 확인해보며 모두 할인하는 경우 cnt+1을 해줍니다.
    3. 최종 cnt값을 출력합니다.
*/

function solution(want, number, discount) {
  const wantList = new Map();
  let cnt = 0;
  want.forEach((item, idx) => wantList.set(item, number[idx]));
  discount.forEach((_, idx) => (check(discount, wantList, idx) ? cnt++ : cnt));

  return cnt;
}

function check(discount, wantList, idx) {
  const copyWantList = new Map(wantList);

  for (let i = idx; i < idx + 10; i++) {
    const curDiscountItem = discount[i];
    if (!curDiscountItem) return false;
    if (copyWantList.has(curDiscountItem))
      copyWantList.set(curDiscountItem, copyWantList.get(curDiscountItem) - 1);
    if (copyWantList.get(curDiscountItem) === 0) copyWantList.delete(curDiscountItem);
  }
  return copyWantList.size === 0 ? true : false;
}
