var obj1 = {
  outer: function () {
    console.log(this);    // {outer: ƒ}   ( === obj1 )

    var innerFunc = function () {
      console.log(this);    // Window {window: Window, self: Window, document: document, name: "", location: Location, …}   ( === Window )
    }
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc    // {innerMethod: ƒ}   ( === obj2 )
    };
    obj2.innerMethod();
  }
};
obj1.outer();
