var obj = {
  outer: function () {
    console.log(this);    // {outer: ƒ}   ( === obj1 )

    var innerFunc1 = function () {
      console.log(this);    // Window {window: Window, self: Window, document: document, name: "", location: Location, …}   ( === Window )
    }
    innerFunc1();

    var self = this;
    var innerFunc2 = function () {
      console.log(self);    // {outer: ƒ}   ( === obj1 )
    }
    innerFunc2();
  }
};
obj.outer();
