var a = 1;

function outer() {

  function inner() {
    console.log(a);    // undefined
    var a = 3;
  }
  inner();
  console.log(a);    // 1
}

outer();
console.log(a);    // 1







var a = 1;


var user = {
  name: 'kyungmin',
  urls: function () {
    console.log(a);
    var obj = {
      a: 3,
      print: function() {
        console.log(a);
      }
    }
    obj.print();
  }
};
