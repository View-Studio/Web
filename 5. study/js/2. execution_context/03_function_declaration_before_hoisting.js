// [before hoisting]

function a() {
    console.log(b);
    var b = 'bbb';
    console.log(b);

    function b() {}
    console.log(b);
}

a();
