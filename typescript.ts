// let u = true;
// u = "string" //Error: type string is not assignable parameter to type boolean
// Math.round(u) //Argument of type 'boolean' is not assignable to parameter of type number.

//To avoid below error : 

let v :any = true;
v="string" 
Math.round(v);


//type : unknown : 

let w : unknown =1;
w="string";

w={
    runANonExistentMethod :()=>{
        console.log("i think therefore i am ")
    }
} as {runANonExistentMethod :()=>void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
  }
  // Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting