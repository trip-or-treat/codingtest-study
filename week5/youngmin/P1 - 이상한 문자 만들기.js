function solution(str) {
  return str
    .split(" ")
    .map((el) =>
      [...el]
        .map((s, index) =>
          index % 2 === 0 ? s.toUpperCase() : s.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

let s = "try hello world";

console.log(solution(s));
