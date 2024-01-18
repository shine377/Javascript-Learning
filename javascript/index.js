// ternary operator

const value = 5;
const value1 = value === 5 ? 10 : 100;
console.log(value1);

//USER INPUT

const myBool = confirm("Hello");
console.log(myBool); // If ok is pressed it will print true else false,This will not happen in alert

const prom = prompt("Why do you want to exit");
console.log(prom ?? "Reason is not entered"); //if it is cancelled it return null use null collasking to fix which is ??

//when cancel is clicked and ok is clicked when the input box is empty
const prom1 = prompt("Why do you want to exit");
if (prom1) {
  console.log(prom1 ?? "Cancel is clicked");
} else {
  console.log("Empty response");
}
