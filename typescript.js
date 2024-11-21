"use strict";
// let u = true;
// u = "string" //Error: type string is not assignable parameter to type boolean
// Math.round(u) //Argument of type 'boolean' is not assignable to parameter of type number.
//To avoid below error : 
let v = true;
v = "string";
Math.round(v);
