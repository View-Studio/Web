// (1) 전역 실행 컨텍스트
var a = 1;

function outer() {    // (2) outer 실행 컨텍스트

  function inner() {    // (3) inner 실행 컨텍스트
    console.log(a);    // undefined
    var a = 3;
  }
  inner();    // (3)
  console.log(a);    // 1
}

outer();    // (2)
console.log(a);    // 1
