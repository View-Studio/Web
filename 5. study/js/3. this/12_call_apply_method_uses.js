var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
Array.prototype.push.call(obj, 'd');
console.log(obj); // {0: "a", 1: "b", 2: "c", 3: "d", length: 4}

var arr = Array.prototype.slice.call(obj);
console.log(arr); // ["a", "b", "c", "d"]





function a() {
    var argv = Array.prototype.slice.call(arguments);
    console.log(argv); // [1, 2, 3]
    argv.forEach(function (arg) {
        console.log(arg);
    });
}
a(1, 2, 3); // 1 2 3



document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
console.log(nodeList); // NodeList(3) [div, div, div]

var nodeArr = Array.prototype.slice.call(nodeList);
console.log(nodeArr); // [div, div, div]
nodeArr.forEach(function (node) {
    console.log(node); // <div>a</div> <div>b</div> <div>c</div>
});





var str = 'abc def';

Array.prototype.push.call(str, ', pushed string'); // Uncaught TypeError: Cannot assign to read only property 'length' of object '[object String]'

Array.prototype.concat.call(str, 'string'); // [String {"abc def"}, "string"]

Array.prototype.every.call(str, function (char) {
    return char !== ' ';
}); // false

Array.prototype.some.call(str, function (char) {
    return char === ' ';
}); // true

var newArr = Array.prototype.map.call(str, function (char) {
    return char + '!';
});
console.log(newArr); // ["a!", "b!", "c!", " !", "d!", "e!", "f!"]

var newStr = Array.prototype.reduce.apply(str, [function (string, char, i) {
    return string + char + i;
}, '']);
console.log(newStr); // a0b1c2 3d4e5f6





var Person = function (name, gender) {
    this.name = name;
    this.gender = gender;
};

var Student = function (name, gender, school) {
    Person.call(this, name, gender);
    this.school = school;
};

var Employee = function (name, gender, company) {
    Person.apply(this, [name, gender]);
    this.company = company;
};

var by = new Student('설아', 'female', '서울대');
var jn = new Employee('하율', 'male', '구골');

console.log(by); // Student {name: "설아", gender: "female", school: "서울대"}
console.log(jn); // Employee {name: "하율", gender: "male", company: "구골"}





var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3
