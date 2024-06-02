function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

let bin1 = "10";
let bin2 = "11";

console.log(solution(bin1, bin2));
