function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    // 배포
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}
