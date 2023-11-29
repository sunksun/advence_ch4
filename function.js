function Display(x) { 
    console.log(x);
}
Display(500);

//Defining a function
function sayHello(){
    console.log("Hello Programmer!")
    console.log("Hope you're doing great!")
}
//we call the function here
sayHello()

function print(str) {
    if(str == '') {
        return 
    }
    console.log(str)
} 
print(123)

//Function definition
function greeting(name){
    console.log("Good morning " + name)
    console.log("Programming is fun, you know!")
}
//function call
greeting("Sunksun")

//Function definition
function doSum(x, y , z){
    console.log("The sum is ")
    console.log(x+y+z)
    console.log("The average is: ")
    console.log((x+y+z)/3)
}

//function call
doSum(10, 20, 30)

var car = 'Toyota camry';
function myFunction() {
      var car = 'Bugatti';
      console.log(car); //car in function scope
}
myFunction();

console.log(car); //car outside the function scope

function multiply(num1, num2) {
	return num1 * num2;
}
let x = 2;
let y = 3;
console.log("Multiplication of", x,
	"and", y, "is", multiply(x, y));