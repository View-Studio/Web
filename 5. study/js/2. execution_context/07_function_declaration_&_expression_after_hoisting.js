var sum /*(1)*/ = function sum(a, b) {
    /*(3)*/
    return a + b;
}
var multiply; /*(2)*/

console.log(sum(1, 2)); // 3
console.log(multiply(3, 4)); // Uncaught TypeError: multiply is not a function   /* 런타임 종료 */

multiply = function (a, b) {
    return a * b;
}
