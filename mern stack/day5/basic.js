const [a,b,c]=[10,20,30];
console.log(a); // 10
console.log(b);
console.log(c);

const [y,...z]=[10,20,30,40,50];
console.log(y); //10
console.log(z);

const user={
    name:"John",
    age:30,
    city:"New York"
};
const {name,age,city}=user;
console.log( name); //John
console.log(age);
console.log(city);

function greet({name,age}){
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet(user); // Hello, John! You are 30 years old.
