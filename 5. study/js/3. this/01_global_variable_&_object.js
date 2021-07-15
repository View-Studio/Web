var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1



var b = 1;
window.c = 2;
console.log(b, window.b, this.b); // 1 1 1
console.log(c, window.c, this.c); // 2 2 2

window.b = 7;
var c = 5;
console.log(b, window.b, this.b); // 7 7 7
console.log(c, window.c, this.c); // 5 5 5
