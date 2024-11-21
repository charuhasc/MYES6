const names :string[]=[];
names.push("Charuhas");
console.log(names);
//names.push(3) //gives error : not assignable parameter.

//readonly array to prevent array being changed.

const namesReadOnly:readonly string[]=[];
namesReadOnly.push("Jack");//Error property push does not exist on readonly array.


