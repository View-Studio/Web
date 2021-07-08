var obj = {
  methodA: function () { console.log(this); },
  inner: {
    methodB: function () { console.log(this); }
  }
};


obj.methodA();    // {inner: {…}, methodA: ƒ}   ( === obj )
obj['methodA']();    // {inner: {…}, methodA: ƒ}   ( === obj )


obj.inner.methodB();    // {methodB: ƒ}   ( === obj.inner )
obj.inner['methodB']();    // {methodB: ƒ}   ( === obj.inner )
obj['inner'].methodB();    // {methodB: ƒ}   ( === obj.inner )
obj['inner']['methodB']();    // {methodB: ƒ}   ( === obj.inner )
