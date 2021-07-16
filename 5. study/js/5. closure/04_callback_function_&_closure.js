// 콜백함수를 내부함수로 선언해서 외부변수 참조 ( 클로저 활용 )

var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

fruits.forEach(function (fruit) {
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', function () {
        alert('your choice is ' + fruit);
    });
    $ul.appendChild($li);
});

document.body.appendChild($ul);






// 이벤트리스너의 첫 번째 인수로 이벤트객체가 들어가는 이슈있음

var stones = ['gold', 'silver', 'diamond'];
var $ul = document.createElement('ul');

var alertStone = function (stone) {
    alert('your choice is ' + stone);
};

stones.forEach(function (stone) {
    var $li = document.createElement('li');
    $li.innerText = stone;
    $li.addEventListener('click', alertStone);
    $ul.appendChild($li);
});

document.body.appendChild($ul);
alertStone(stones[1]);






// 콜백함수를 외부에 선언하고, bind메서드로 인수를 전달해서 외부변수 참조

var cats = ['russianBlue', 'siamese', 'persian'];
var $ul = document.createElement('ul');

var alertCat = function (cat) {
    alert('your choice is ' + cat);
};

cats.forEach(function (cat) {
    var $li = document.createElement('li');
    $li.innerText = cat;
    $li.addEventListener('click', alertCat.bind(null, cat));
    $ul.appendChild($li);
});

document.body.appendChild($ul);
alertCat(cats[1]);







// 콜백함수로 고차함수를 사용해서 외부변수 참조 ( 클로저 활용 )

var dogs = ['poodle', 'maltese', 'pomeranian '];
var $ul = document.createElement('ul');

var alertDogBuilder = function (dog) {
    return function () {
        alert('your choice is ' + dog);
    };
}

dogs.forEach(function (dog) {
    var $li = document.createElement('li');
    $li.innerText = dog;
    $li.addEventListener('click', alertDogBuilder(dog));
    $ul.appendChild($li);
});

document.body.appendChild($ul);
