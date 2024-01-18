//Rock paper scissor code with ternary operator and using math

const arr = ["Rock", "Scissor"];
const computer = arr[Math.floor(Math.random() * 2)];
const human = arr[Math.floor(Math.random() * 2)];
const result =
  computer === "Rock" && human === "Rock"
    ? "Tie"
    : computer === "Rock" && human === "Scissor"
    ? "Computer wins"
    : computer === "Scissor" && human === "Rock"
    ? "Human wins"
    : "No Tie";
console.log(result);
