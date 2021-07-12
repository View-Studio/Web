var Cat = function (name, age) {
  this.bark = '야옹~';
  this.name = name;
  this.age = age;
};

var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);

console.log(choco, nabi);

/* 결과
Cat {bark: "야옹~", name: "초코", age: 7}
Cat {bark: "야옹~", name: "나비", age: 5}
*/
