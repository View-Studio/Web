var a;

console.log(a);    // undefined



var obj = {
  first: 1,
  second: 'two'
};

console.log(obj.third);    // undefined



var arr1 = [];

console.log(arr1[0]);    // undefined
console.log(arr1[1]);    // undefined

var arr2 = [];
arr2[1] = "hello";

console.log(arr2);    // [empty, "hello"]
console.log(arr2[0]);    // undefined
console.log(arr2[1]);    // hello
console.log(arr2[2]);    // undefined

var arr3 = new Array(5);
console.log(arr2);    // [empty x 5]



var func1 = function() {};
var ham1 = func1();
console.log(ham1);    // undefined

var func2 = function(a, b) {
  var num = a + b;
};
var ham2 = func2()
console.log(ham2);    // undefined



let arr4 = [];
arr4[1] = 10;
console.log(arr4);

arr4.forEach(function (v, i) { console.log(v, i); }); // 1 10 (0번째 인덱스 제외)
arr4.map(function (v, i) { return v + i; }); // [empty, 2]
arr4.filter(function (v) { return !v; }); // []
arr4.reduce(function (acc, cur) { return acc + cur; }, ''); // 10



var n = null;
console.log(typeof n);    // object

console.log(n == undefined);    // true
console.log(n == null);    // true

console.log(n === undefined);    // false
console.log(n === null);    // true
