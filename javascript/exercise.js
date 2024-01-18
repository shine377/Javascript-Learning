let accept = confirm("Do you want to play rock paper scissor game");
let popup;
console.log(accept);
if (accept) {
  popup = prompt("Enter rock, paper or scissors");
}
const arr = ["rock", "paper", "scissor"];
const computer = arr[Math.floor(Math.random() * 3)];

if (computer === "rock" && popup === "paper") {
  alert("You win");
} else if (computer === "rock" && popup === "scissor") {
  alert("computer win");
} else if (computer === "paper" && popup === "rock") {
  alert("computer win");
} else if (computer === "paper" && popup === "scissor") {
  alert("You win");
} else if (computer === "scissor" && popup === "paper") {
  alert("computer win");
} else if (computer === "scissor" && popup === "rock") {
  alert("You win");
} else {
  alert("Tie");
}
