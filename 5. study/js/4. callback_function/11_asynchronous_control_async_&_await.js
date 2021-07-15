var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

var coffeeMaker = async function () {
  var coffeeList = '';
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ',' : '') + await addCoffee(name);
  };

  await _addCoffee('에스프레소');
  console.log(coffeeList);

  await _addCoffee('아메리카노');
  console.log(coffeeList);

  await _addCoffee('카페모카');
  console.log(coffeeList);

  await _addCoffee('카페라떼');
  console.log(coffeeList);
};

coffeeMaker();
