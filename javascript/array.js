const arr = [];
arr[0] = "shiny";
arr[1] = "mary";
arr[2] = "study";
arr[3] = "javascript";
arr[4] = "html";
console.log("🚀 ~ arr:", arr);

//Adding value to array at the last
arr.push("lastval");
console.log("🚀 ~ arr:", arr);

//Deleting last value

arr.pop();
console.log("🚀 ~ arr:", arr);

//Adding value at the beginning

arr.unshift("firstval");
console.log("🚀 ~ arr:", arr);

//Deleting value at the beiginning

arr.shift();
console.log("🚀 ~ arr:", arr);

//If adding and deleting functions are assigned to a constant it will return the number of items or it will return the specified value when deleted

const adding = arr.push("lastval");
console.log("🚀 ~ adding:", adding);

const deleting = arr.pop();
console.log("🚀 ~ deleting:", deleting);

//Delete is used to empty the value
// delete arr[1]
// console.log("🚀 ~ arr:", arr)
//we wont use delete because it will retun undefine use splice instead

//deleting of selecting specific value using splice

arr.splice(2, 2); //from index 2 2value will be deleted including index2
console.log("🚀 ~ arr:", arr);
//if want to delete and replace give value 3

arr.splice(1, 1, "MARY");
console.log("🚀 ~ arr:", arr);

//If we want to add any element at the middle without deleting

arr.splice(1, 0, "suvi");
console.log("🚀 ~ arr:", arr);

//Slice in array..it takes a particular position and copies the value array in new variable array

const newArr = arr.slice(1, 4);
console.log("🚀 ~ newArr:", newArr);

//Join convert the whole array into a single string

const joinArr = arr.join();
console.log("🚀 ~ joinArr:", joinArr);

//Split retains the string to array but integer and bool will convert to string

const splitArr = joinArr.split(",");
console.log("🚀 ~ splitArr:", splitArr);

//adding or concat array

const newArray = ["val1", "val2", "val3"];
const spreadarr = ["shiny", ...newArray];
console.log("🚀 ~ spreadarr:", spreadarr);

const concad = newArray.concat(spreadarr);
console.log("🚀 ~ concad:", concad);
