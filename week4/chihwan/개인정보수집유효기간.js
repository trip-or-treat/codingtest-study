/*
    1. 오늘을 일자를 기준으로 계산합니다. 
        1년 = year * 12 * 28 , 
        1달 = month * 28

    2. terms를 순회하면서 { type : 기간 }의 Map 자료구조로 보관합니다.
    
    3. privacies를 순회하면서 기존날짜에 type의 기간을 더한 값을 계산합니다.
    
    4. 3에서 계산한 값과, 오늘날짜를 비교해서 오늘보다 기간이 적게남은(이하) 날짜를 찾아 indx 순서를 담아 출력합니다.
*/

function solution(today, terms, privacies) {
  const termsMap = makeTerms(terms);
  const calToday = calculateDay(today, termsMap);
  const ans = [];

  privacies.forEach((privacy, idx) => {
    const [curDate, curType] = privacy.split(' ');
    const curDayCal = calculateDay(curDate, termsMap, curType);
    if (calToday >= curDayCal) ans.push(idx + 1);
  });

  return ans;
}

function makeTerms(terms) {
  const termsMap = new Map();

  terms.forEach((term) => {
    const [alpha, month] = term.split(' ');
    termsMap.set(alpha, month);
  });

  return termsMap;
}

function calculateDay(date, termsMap, type) {
  const [year, month, day] = date.split('.').map(Number);

  if (type) return year * 12 * 28 + (month + Number(termsMap.get(type))) * 28 + day;
  return year * 12 * 28 + month * 28 + day;
}
