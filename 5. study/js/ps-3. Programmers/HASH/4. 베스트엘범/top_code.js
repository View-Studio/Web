function solution(genres, plays) {
  var dic = {};
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  var dupDic = {};
  return genres
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map((t) => t.index);
}
