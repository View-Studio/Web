var obj1 = {
  outer: function () {
    console.log(this);    // {outer: ƒ}   ( === obj1 )

    var innerFunc = function () {
      console.log(this);
    }
    innerFunc.call(this);    // // {outer: ƒ}   ( === obj1 )

  }
};
obj1.outer();




var obj2 = {
  outer: function () {
    console.log(this);    // {outer: ƒ}   ( === obj1 )

    var innerFunc = function () {
      console.log(this);
    }.bind(this);

    innerFunc();    // // {outer: ƒ}   ( === obj1 )

  }
};
obj2.outer();




var obj3 = {
  logThis: function () {
    console.log(this);
  },

  logThisLater1: function () {
    setTimeout(this.logThis, 500);
  },

  logThisLater2: function () {
    setTimeout(this.logThis.bind(this), 1000);
  }
}

obj3.logThisLater1();    // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
obj3.logThisLater2();    // {logThis: ƒ, logThisLater1: ƒ, logThisLater2: ƒ}
