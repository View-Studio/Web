function solution(progresses, speeds) {
  var answer = [];
  var completeNum = 0;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < progresses.length; j++) {
      progresses[j] = progresses[j] + speeds[j];
    }

    for (let t = 0; t < progresses.length; t++) {
      if (progresses[t] >= 100) {
        if (t + 1 === progresses.length) {
          completeNum++;
          answer.push(completeNum);
          progresses.splice(0, t + 1);
          speeds.splice(0, t + 1);
          completeNum = 0;
          break;
        } else {
          completeNum++;
          continue;
        }
      } else {
        if (t != 0) {
          answer.push(completeNum);
          progresses.splice(0, t);
          speeds.splice(0, t);
          completeNum = 0;
          break;
        } else {
          break;
        }
      }
    }
  }
  return answer;
}
