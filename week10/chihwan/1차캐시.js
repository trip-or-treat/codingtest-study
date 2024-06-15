/*
    1. cacheSize가 0이면 cities의 길이 * cacheMiss를 출력합니다.
    2. 대소문자 구분을 하지 않기 때문에 모든 city를 대문자로 바꿔줍니다.
    3. 만약 캐시된 값이 있다면
        3-1. 캐시된 도시의 index값을 찾아줍니다.
        3-2. 캐시된 친구의 index를 통해 삭제해주고, 캐시 마지막에 값을 추가합니다.
        3-3. cacheHit를 ans에 추가합니다.
    4. 만약 캐시된 값이 없다면
        4-1. 만약 캐시길이와 cacheSize가 같다면 제일 먼저 저장된 값을 제거해줍니다.
        4-2. 캐시에 새로운 값을 추가합니다.
        4-3. cacheMiss를 ans에 추가합니다.
    5. 총 ans을 출력합니다.    
*/

function solution(cacheSize, cities) {
  const [cacheHit, cacheMiss] = [1, 5];
  const cache = [];
  let ans = 0;

  if (cacheSize === 0) return cities.length * cacheMiss;

  cities.forEach((city) => {
    const upperCity = city.toUpperCase();
    if (cache.includes(upperCity)) {
      const idx = cache.indexOf(upperCity);
      cache.splice(idx, 1);
      cache.push(upperCity);
      ans += cacheHit;
    }

    if (!cache.includes(upperCity)) {
      if (cache.length === cacheSize) cache.shift();
      cache.push(upperCity);
      ans += cacheMiss;
    }
  });

  return ans;
}
