function a () {/*  ...  */}    // 함수 선언문. 함수명 a가 곧 변수명
a();    // 실행 ok

var b = function () {/*  ...  */}    // (익명) 함수 표현식. 변수명 b가 곧 함수
b();    // 실행 ok

var c = function d () {/*  ...  */}    // 기명 함수 표현식. 변수명은 c, 함수명은 d
c();    // 실행 ok
d();    // error
