function solution(phone_number) {
  var answer = "";
  let star = [];
  let cut = [];

  for (let i = 0; i < phone_number.length - 4; i++) star.push("*");

  cut = phone_number.slice(-4);

  return star.join("") + cut;
}
