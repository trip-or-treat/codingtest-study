function solution(price, money, count) {
  let totalPrice = 0;

  for (let cnt = 0; cnt <= count; cnt += 1) {
    totalPrice += cnt * price;
  }

  return totalPrice >= money ? totalPrice - money : 0;
}

let price = 3;
let money = 20;
let count = 4;

console.log(solution(price, money, count));
