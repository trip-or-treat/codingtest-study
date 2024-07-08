function solution(numbers) {
  const res = numbers
    .sort((a, b) => {
      let sumA = String(a) + String(b);
      let sumB = String(b) + String(a);
      return sumB.localeCompare(sumA);
    })
    .join('');

  return Number(res) === 0 ? '0' : res;
}
