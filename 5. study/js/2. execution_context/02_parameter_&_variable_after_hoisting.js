// [after hoisting]

function a() {
    var x;
    var x;
    var x;

    x = 1;

    console.log(x); // 1
    console.log(x); // 1

    x = 2;
    console.log(x); // 2
}

a(1);
