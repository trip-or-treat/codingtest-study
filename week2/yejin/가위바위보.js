const solution = (rsp) => {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp].map((x) => arr[x]).join("");
};

// 객체 = { key: value }로 이루어짐
// 객체의 요소에 접근하는법
// obj.key 또는 obj[key]
// 이 문제에서 arr.x가 안되는 이유: 'x'라는 key를 찾으려고 하기 때문
