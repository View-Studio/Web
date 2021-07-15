console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum(a, b) { // function declaration (함수 선언문)
    return a + b;
}

var multiply = function (a, b) { // function expression (함수 표현식)
    return a * b;
}
