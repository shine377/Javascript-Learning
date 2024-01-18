function getNameFromEmail(email) {
  const valu = email.slice(0, email.indexOf("@"));
  return valu;
}
const value = "shinymary377@gmail.com";
console.log(getNameFromEmail(value));

//function for proper case which is changing first letter of the word to caps and other will remain small

function changeIntoPropperCase(value) {
  const proper = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  return proper;
}

const name = "sHinY";
console.log(changeIntoPropperCase(name));

//Declaring the function with the variable

// const functionName = function ("parameter"){

// }

//same value will be return ed

//ARROW FUNCTION

// const arrowFunction = () =>{

// }
