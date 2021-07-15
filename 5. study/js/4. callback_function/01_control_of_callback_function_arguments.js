var newArr = [10, 20, 30].map(function (currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});
console.log(newArr);

// 실행 결과
// 10 0
// 20 1
// 30 2
// [15, 25, 35]





// 매개변수의 이름을 바꿔서 실행해도 콜백함수에 들어가는 인수의 순서는 달라지지 않는다.
// Array.prototype.map(callback[, thisArg])
// callback: function(currentValue, index, array)

var newArr2 = [10, 20, 30].map(function (index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
});
console.log(newArr2);

// 실행 결과
// 10 0
// 20 1
// 30 2
// [5, 6, 7]
