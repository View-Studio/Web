function solution(genres, plays) {
  const count = {};
  let answer = [];
  const acc = genres.reduce((a, c, i) => {
    debugger;
    count[c] ? count[c].push([i, plays[i]]) : (count[c] = [[i, plays[i]]]);
    return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
  }, new Map());

  [...acc]
    .sort((a, b) => b[1] - a[1])
    .map((v) => {
      answer = answer.concat(
        count[v[0]].sort((c, d) => d[1] - c[1]).slice(0, 2)
      );
    });
  return answer.map((v) => v[0]);
}
