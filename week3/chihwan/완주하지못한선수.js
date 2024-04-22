function solution(participant, completion) {
  const map = new Map();

  participant.forEach((name) => {
    if (map.has(name)) map.set(name, map.get(name) + 1);
    else map.set(name, 0);
  });

  completion.forEach((name) => map.set(name, map.get(name) - 1));

  return [...map].find(([_, value]) => value === 0)[0];
}
