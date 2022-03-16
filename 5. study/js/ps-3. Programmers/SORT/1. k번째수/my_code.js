function solution(array, commands) {
  let answer = [];
  let arr = [];
  const arrayBackUp = array.slice();

  for (let i = 0; i < commands.length; i++) {
    arr = array.splice(commands[i][0] - 1, commands[i][1] - commands[i][0] + 1);
    arr.sort((a, b) => a - b);
    answer.push(arr[commands[i][2] - 1]);
    arr = [];
    array = arrayBackUp.slice();
  }

  return answer;
}
