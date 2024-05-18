function solution(polynomial) {
  let [xnum, num] = [0, 0];
  polynomial.split(" + ").forEach((str) => {
    if (str.includes("x") && str.length !== 1) xnum += Number(str.slice(0, -1));
    if (str === "x") xnum += 1;
    if (Number(str)) num += Number(str);
  });

  if (xnum === 0) return num + "";
  if (xnum === 1) xnum = "x";
  if (xnum > 1) xnum = `${xnum}x`;

  if (num === 0) return xnum;

  return `${xnum} + ${num}`;
}

let polynomial = "1";

console.log(solution(polynomial));
