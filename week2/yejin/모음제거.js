const solution = (my_string) => {
  return my_string.replace(/[aeiou]/g, "");
};

// 문자열.replace('찾으려는 문자', '대체할 문자') : 처음으로 찾은 타겟 문자를 대체문자로 변환
// 문자열.replaceAll('찾으려는 문자', '대체할 문자') : 타겟 문자를 모두 대체문자로 변환

// 정규표현식 사용: 문자열.replace(/찾으려는 문자/gim, '대체할 문자')
// g: Global. 모든 문자 검색(안 쓰면 처음 발견된 문자만 치환)
// i: Ignore Case. 대소문자 구분 안함
// m: Multi Line. 여러 행의 문자열에 대해 검색
// 옵션을 하나만 사용해도 되고 여러개 사용해도 된다. ex) g, gi, gm, im 등

// 여러개 치환 시 (a|e|i|o|u)로 써도 되지만 [aeiou]가 더 빠름
