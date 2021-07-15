// [before hoisting]

function a(x) {
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}

a(1);
