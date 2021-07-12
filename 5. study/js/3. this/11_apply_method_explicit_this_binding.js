var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]);    // {x: 1} 4 5 6



var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  }
};
obj.method.apply({ a: 4 }, [5, 6]);    // 4 5 6
