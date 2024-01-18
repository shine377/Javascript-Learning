//Object is a key value pair
const myObj = {
  name: "shiny",
  role: "Full Stack Developer",
  place: "Chennai",
};
const value = myObj.role;
console.log("🚀 ~ value:", value);
console.log("🚀 ~ myObj:", myObj);

//Object inside object and array

const myObjObj = {
  name: "shiny",
  role: "Full Stack Developer",
  skills: { FrontEnd: "reactJs", Backend: "Nodejs" },
  place: "Chennai",
  allSkills: ["bootstrap", "html", "css", "typescript"],
};
console.log("🚀 ~ myObjObj:", myObjObj.allSkills[1]);

const value2 = myObjObj.skills.Backend;
console.log("🚀 ~ value2:", value2);

//function inside object

const myObjFn = {
  name: "shiny",
  role: "Full Stack Developer",
  skills: { FrontEnd: "reactJs", Backend: "Nodejs" },
  place: "Chennai",
  allSkills: ["bootstrap", "html", "css", "typescript"],
  action: function () {
    return `My name is ${this.name}`; //if you want to get anything inside the object use template literal
  },
};

const value3 = myObjFn.action();
console.log("🚀 ~ value3:", value3);

//copies object into new object / inheritance
const car = Object.create(myObjFn);
car.wheels = 4; //adding value
console.log("🚀 ~ car:", car.action());

//If you want to get the keys/values of the object

const keyObj = Object.keys(myObjFn);
console.log("🚀 ~ keyObj:", keyObj);

const valueObj = Object.values(myObjFn);
console.log("🚀 ~ valueObj:", valueObj);

//looping the object / for in loop

const movies = {
    actor:'vijay',
    music:'an',
    director:'Lokesh',
}
console.log(movies.hasOwnProperty('actor'));//check wether the key is in the object 
for(let job in movies){
    console.log(`${job} is ${movies[job]}`);
}

//Destructuring the object

const movie = {
    actor:'vijay',
    music:'an',
    director:'Lokesh',
}

const {actor,music,director}=movie;//spelling should be same
console.log(director);// will print the value accordingly


//sending the object to the function and giving single value

const fun = ({music}) =>{
    return music
}

console.log(fun(movie));