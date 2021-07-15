// [after hoisting]

function a() {
    var b;
    var b = function b() {}

    console.log(b); // function b () {}
    b = 'bbb';
    console.log(b); // bbb
    console.log(b); // bbb
}

a();
