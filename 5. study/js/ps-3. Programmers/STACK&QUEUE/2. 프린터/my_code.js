const solution = function (priorities, location) {
  let answer = 0;
  let n = 0;

  for (let i = 1; i < priorities.length; i++) {
    if (priorities[n] < priorities[i]) {
      if (location === n) {
        location = priorities.length - 1;
      } else if (location > n) {
        location -= 1;
      }
      let docJ = priorities.splice(n, 1);
      priorities.push(docJ[0]);
      i = n;
    } else {
      if (i === priorities.length - 1) {
        n += 1;
        i = n;
        if (n === priorities.length - 1) {
          break;
        }
      } else {
        continue;
      }
    }
  }

  answer = location + 1;

  return answer;
};
