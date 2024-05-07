/*
    1. 동일한 유저에 대한 신고 횟수를 1회로 제한하기 위해  set을 통해 중복을 제거한다.
    2. set을 순회하면서 {신고당한자 : [신고한자들]} 형태의 map 자료구조로 데이터를 저장한다.
    3. map자료구조를 신고당한 횟수가 k이상인경우 신고한자들을 매핑해서 새로운 map자료구조로 만들어준다.
    4. id_list를 순회하면서 자신이 신고한자가 신고당한경우 횟수를 출력한다.
*/

function solution(id_list, report, k) {
  const set = new Set();
  const map = new Map();
  report.forEach((reported) => set.add(reported));

  [...set].forEach((reported) => {
    const [reporter, reportee] = reported.split(' ');
    if (map.has(reportee)) map.set(reportee, [...map.get(reportee), reporter]);
    else map.set(reportee, [reporter]);
  });

  const filteredReporters = [...map].flatMap(([reportee, reporters]) => {
    if (reporters.length >= k) return reporters;
    return [];
  });

  const ans = new Map();
  filteredReporters.forEach((name) => ans.set(name, (ans.get(name) || 0) + 1));

  return id_list.map((name) => ans.get(name) || 0);
}
