function solution(genres, plays) {
  const answer = [];
  const totalList = [];
  const totalObj = {};
  const songObj = {};

  for (let i = 0; i < genres.length; i++) {
    if (totalObj[genres[i]]) {
      totalObj[genres[i]] += plays[i];
    } else {
      totalObj[genres[i]] = plays[i];
    }
  }

  for (let i = 0; i < Object.keys(totalObj).length; i++) {
    totalList.push({
      genre: Object.keys(totalObj)[i],
      play: totalObj[Object.keys(totalObj)[i]],
    });
  }

  for (let i = 0; i < genres.length; i++) {
    if (songObj[genres[i]]) {
      songObj[genres[i]].push({ num: i, play: plays[i] });
    } else {
      songObj[genres[i]] = [{ num: i, play: plays[i] }];
    }
  }

  totalList.sort(function (a, b) {
    return b.play - a.play;
  });

  for (let i = 0; i < totalList.length; i++) {
    songObj[totalList[i].genre].sort(function (a, b) {
      return b.play - a.play;
    });
  }

  for (let i = 0; i < totalList.length; i++) {
    if (songObj[totalList[i].genre].length === 1) {
      answer.push(songObj[totalList[i].genre][0].num);
    } else {
      answer.push(songObj[totalList[i].genre][0].num);
      answer.push(songObj[totalList[i].genre][1].num);
    }
  }

  return answer;
}
