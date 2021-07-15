var a = 1;
delete window.a; // false
console.log(a, window.a, this.a); // 1 1 1


var b = 2;
delete window.b; // false
console.log(b, window.b, this.b); // 2 2 2




window.c = 3;
delete window.c; // true
console.log(c, window.c, this.c); // Uncaught ReferenceError: c is not defined


window.d = 4;
delete d; // true
console.log(d, window.d, this.d); // Uncaught ReferenceError: c is not defined
