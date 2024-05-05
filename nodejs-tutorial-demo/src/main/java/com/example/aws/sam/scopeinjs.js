

{
let x=10;  //block scope
y=20;
console.log(x+":y is:"+y);

var j=09;

}

//you can not access x variable outside of the block because it is declared using  let keyword
console.log(y);
console.log(j);
//console.log(x);

