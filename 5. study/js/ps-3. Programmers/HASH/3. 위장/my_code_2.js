function solution(clothes) {
  let answer = 1;
  const partObj = {};

  for (let i = 0; i < clothes.length; i++) {
    if (partObj[clothes[i][1]]) {
      partObj[clothes[i][1]]++;
    } else {
      partObj[clothes[i][1]] = 2; // 안 입는 경우의 수 포함.
    }
  }

  for (let prop in partObj) {
    answer = answer * partObj[prop];
  }

  answer -= 1;

  return answer;
}
