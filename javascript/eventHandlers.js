const header = document.getElementById("heading")
console.log("🚀 ~ header:", header)

const selection = document.createElement('div');
selection.textContent="Hi shiny here"
header.append(selection);
console.log('hi shiny here');


//syntax
//addEventListeners(event, function, useCapture) usecapture default value is

const headingFuntion = () => {
const prom=  prompt("type who is your loved one")
const promDiv = document.createElement('div');
promDiv.textContent=prom
header.append(promDiv)
}

selection.addEventListener("click" , headingFuntion , false)

//we can also use removeEventListeners(event,function,usecapture) to remove the events

//anonymous function
//anonymous functions will not have name like normal function

selection.addEventListener("click", (event) => {
console.log(event.target);
event.target.textContent="Hi suvi here";
})

//It can also be returned as 

selection.addEventListener("click", function(event) {
    console.log(event.target);
    event.target.textContent="Hi suvi here";
    })

//complete state of loading the apis

document.addEventListener("readystatechange",(event)=>{
if(event.target.readyState==="complete"){
    console.log('state is completed')
}})

//eventbubblingup will allow the event from bottom to up

//stopPropagation will stop the bubbleup
//if the usecapture is true it will change the bubbleup to bubbledown