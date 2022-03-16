function solution(clothes) {
  let answer = 1;
  const partList = [];
  const allPartList = [];
  const count = [];

  for (let i = 0; i < clothes.length; i++) {
    partList.push(clothes[i][1]);
  }
  partList.sort();

  for (let i = 0; i < partList.length; i++) {
    if (partList[i] !== partList[i + 1]) {
      allPartList.push(partList.splice(0, i + 1));
      i = -1;
    }
  }

  for (let i = 0; i < allPartList.length; i++) {
    count.push(allPartList[i].length);
  }

  if (count.length === 1) {
    answer = count[0];
  } else {
    for (let i = 0; i < count.length; i++) {
      count[i] += 1;
      answer *= count[i];
    }
    answer -= 1;
  }

  return answer;
}
