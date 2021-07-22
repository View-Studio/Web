var arr = [1, 2];
console.dir(arr);
console.dir(Array);

arr.forEach(function () {}); // (O) undefined
Array.isArray(arr); // (O) true
arr.isArray() // (X) Uncaught TypeError: arr.isArray is not a function
