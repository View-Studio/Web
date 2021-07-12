// primitive type data variable copy
var a = 10;
var b = a;

// reference type data variable copy
var obj1 = { c: 123, d: "hustle" };
var obj2 = obj1


// -------------------------------------------

b = 15;   // a !== b
obj2.c = 321;   // obj1 === obj2

// -------------------------------------------

b = 20;   // a !== b
obj2 = { c: 300, d: "hustle" };   // obj1 !== obj2
