var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};

var g = new Grade(100 ,80);

Grade.prototype = [];
g.__proto__ = Grade.prototype
/*
g.__proto__ 에 Grade.prototype를 대입해주지 않으면,
Grade.prototype이 []로 바뀌면서 Grade.prototype의 __proto__가 Array의 prototype으로 바뀌지만,
g의 __proto__는 []로 바뀌지 않고 []를 대입하기 전의 객체를 그대로 참조하게 된다.
*/

console.log(g);    // Grade(2) [100, 80]
g.pop();
console.log(g);    // Grade [100]
g.push(90);
console.log(g);    // Grade(2) [100, 90]
