var NewConstructor = function () {
    console.log('this is new constructor!');
}



var datatypes = [
  1, // Number & false
  'test', // String & false
  true, // Boolean & false
    {}, // NewConstructor & false
  [], // NewConstructor & false
  function () {}, // NewConstructor & false
  /test/, // NewConstructor & false
  new Number(), // NewConstructor & false
  new String(), // NewConstructor & false
  new Boolean(), // NewConstructor & false
  new Object(), // NewConstructor & false
  new Array(), // NewConstructor & false

  new Function(),
                  /* Uncaught EvalError: Refused to evaluate a string as JavaScript
                     because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive */

  new RegExp(), // NewConstructor & false
  new Date(), // NewConstructor & false
  new Error() // NewConstructor & false
]



datatypes.forEach(function (d) {
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&', d instanceof NewConstructor);
})
