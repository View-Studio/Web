console.log(sum(3, 4));    // 60 lines (60번째 줄)    Uncaught TypeError: multiply is not a function   /* 런타임 종료 */

/* ... */

var sum = function (x, y) {    // 100 lines (100번째 줄)
  return x + y;
}

/* ... */

var a = sum(1, 2);    // 200 lines (200번째 줄)

/* ... */

var sum = function (x, y) {    // 5000 lines (5000번째 줄)
  return x + '+' + y + '=' + (x + y);
}

/* ... */

var c = sum(1, 2);    // 5010 lines (5010번째 줄)
console.log(c);
