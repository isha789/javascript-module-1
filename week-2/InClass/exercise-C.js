function numberChecker(num) {
  if (num > 20) {//check if num is greater than 20
    return `${num} is greater than 20`;
  } else if (num === 20) { //check if num is equal to 20
    return `${num} is equal to 20`;
  } else if (num < 20) {//check if num is less than 20
    return `${num} is less than 20`;
  } else {  //check it's not a number
    return ` isn't even a number :(`;
  }
}
console.log(numberChecker())