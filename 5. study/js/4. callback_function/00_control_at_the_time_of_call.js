var count = 0;
var cbFunc = function () {
    console.log(count);
    if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 300);

// 0
// 1
// 2
// 3
// 4
