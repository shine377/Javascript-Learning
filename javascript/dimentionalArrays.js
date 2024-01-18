//one dimentional array
const array1 = ["html", "css", "javascript"];
const array2 = ["bootstrap", "typescript", "reactJs"];
const array3 = ["frontend", "backend", "fullstack"];
const array4 = ["devops", "hr", "testing"];

//two dimentional array
const skills = [array1, array2];
console.log("🚀 ~ skills:", skills);
const role = [array3, array4];
console.log("🚀 ~ role:", role);

const myFav = [skills[1][2], skills[1][2]];
console.log("🚀 ~ myFav:", myFav);

//three dimentional array

const allThings = [skills, role];
console.log("🚀 ~ allThings:", allThings[0][1][0]);
