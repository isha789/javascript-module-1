/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

//const { arrayBuffer } = require("stream/consumers");

function isEmpty(arr) {
if (arr.length ==0){
  return true }  // complete this statement
  else{
    return false
  }
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
