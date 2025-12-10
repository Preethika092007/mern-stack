/* console.log("1"+2);
console.log("10"-2);
console.log("10"*2);
console.log("15"/3)
console.log("5"%2);
console.log(true-1);
console.log(5=="5")
console.log(5==="5")
console.log(0==false)
console.log(0===false)
console.log(null==undefined)
console.log(null===undefined)
let age=25;
/*let age=85;
console.log(age);*/
age=30;// can be reassign and can not be redeclare with let
console.log(age);
var age1=24;
var age1=25;
console.log(age1);
age1=67;
console.log(age1);
console.log(x); // undefined
var x = 5;
/* console.log(x); // ReferenceError// Cannot access 'x' before initialization
let x = 5; */
function example1(){
    if(1){
        var count=10;
    }
    console.log(count); 
}
example1();
/* function example(){
    if(1){
        let  count=10;
    }
    console.log(count); 
}
example();


function example2(){
    if(1){
        const  count=10;
    }
    console.log(count); 
}
example2(); */
greet(); // Hello
function greet() {
  console.log("Hello");
}
const greety = function() {
  console.log("Hello");
};

greety(); // Hello

/* // Error if called before:
sayHi(); // TypeError
var sayHi = function() {
  console.log("Hi");
}; */
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5));


function process(callback) {//higher order function
  console.log("Processing...");
  callback();
}
function done(){//callback function
    console.log("Task completed");
}
process(done);   


//Arrow function
const add=(a,b)=>{
    return a+b;
}; 
console.log(add(5,3)); //8

//normal function expression
const greeth=function(name){
    return "hello"+name;
};
//arrow function expression
const greet1=(name)=>{
    return "hello"+name;
};
console.log(greeth("Alice")); //helloAlice
console.log(greet1("world")); //helloworld

const addtwo =(a,b)=>a+b; //implicit return
console.log(add(10,20)); //30

const square=x=>x*x; //single parameter no need of parenthesis  
console.log(square(6)); //36
 


