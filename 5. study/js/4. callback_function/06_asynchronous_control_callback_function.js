setTimeout(function (name) {
  var coffeeList = name;
  console.log(coffeeList);

  setTimeout(function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);

    setTimeout(function (name) {
      coffeeList += ', ' + name;
      console.log(coffeeList);

      setTimeout(function (name) {
        coffeeList += ', ' + name;
        console.log(coffeeList);
      }, 500, '카페라떼')
    }, 500, '카페모카')
  }, 500, '아메리카노')
}, 500, '에스프레소') 
