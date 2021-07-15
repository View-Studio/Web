var outer1 = function () {
    var a = 1;
    var inner = function () {
        console.log(++a);
    };
    inner();
};

outer1(); // 2






var outer2 = function () {
    var a = 2;
    var inner = function () {
        return ++a;
    };
    return inner();
};

var outPack = outer2();
console.log(outPack); // 3
