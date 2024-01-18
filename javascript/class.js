//object in class

class Drinks{
    name="shiny";//values can also given above the constructor if its value does'nt wanted to be changed
     constructor(type){
        this.rosemilk="2 rosemilk";
        this.badammilk="5 badammilk"
        this.type=type;
        this.action= function(){
            return `they bought ${this.type} ${this.rosemilk} and ${this.badammilk}`
        }
     }
     shiny() {
        return "hi";
    }
    //setting and getting of values

    getType(){
        return this.type
    }

    setType(type){
        return this.type= type;
    }
}
//If a class is wanted to converted to object 
99//By using class we can send value and change the value without using key.value
const ourDinks= new Drinks('cold');
console.log("🚀 ~ ourDinks:", ourDinks)
const hotDrink = new Drinks('hot')
console.log("🚀 ~ hotDrink:", hotDrink)

console.log(ourDinks.action());
console.log(ourDinks.shiny());

ourDinks.setType('warm')
console.log(ourDinks.action());

//Child class

class MYDrinks extends Drinks{
    constructor(type){
        super(type);
            this.straw= "wanted"
            this.glass="wanted"
    }

    actionType(){
        console.log(`My drink ${this.straw} a straw and ${this.glass} to drink a ${this.type} ${this.badammilk}`);
    }

}

const obj = new MYDrinks('warm');
obj.actionType()

//# is used to private values