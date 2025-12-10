/* const fruits=["apple","banana","orange"];
const nl=fruits.push("mango");
console.log(fruits); //["apple","banana","orange","mango"]
console.log(nl);

console.log(fruits.pop()); //"mango"
console.log(fruits); 

const l=fruits.unshift("mango");
console.log(fruits); 
console.log(l);

const r=fruits.shift();
console.log(fruits);
console.log(r);

let fruits1=["apple","banana","orange","grape","kiwi"];

let slice=fruits1.slice(1,4);
console.log(slice); 
console.log(fruits1);

let last2=fruits1.slice(-2);
console.log(last2); 
console.log(fruits1);

let splice=fruits1.splice(1,2,"mango","papaya");
console.log(splice);
console.log(fruits1);

let fruit=["apple","red","banana","yellow","grape","purple"];
console.log(fruit.includes("banana"));
console.log(fruit.includes("mango"));

let numbers=[1,2,3,4,5];
let found=numbers.find(num => num > 3);
console.log(found);

let nums=[3,5,6,7,12,13]
let found1=nums.map(n=>n>10);
console.log(found1);
let filtered=nums.filter(num => num % 2 === 0);
console.log(filtered);

let finde=nums.find(num => num % 2 === 0);
console.log(finde);

let names=["raj","abi","mahesh","kumar"]
let max=names.find(name => name.length > 4);
console.log(max);

let nums1=[1,2,3,4,5];
let result=nums1.map((num)=>num*num);    
console.log(result);
console.log(nums1);
 let res=nums1.map(nu=>nu+100);
 console.log(res);
 let presons=["kumar","vijay","sasi"];
 let  res1=presons.map(p=>p="Mr. "+p);
 console.log(res1);  */

 const student= [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" },
    { name: "Charlie", age: 19, grade: "A+" }
];

console.log(student);
 let res=student.map(stu=>stu.name);
    console.log(res);

 let students=[{name:"ram",mark:45},{name:"sasi",mark:55},{name:"kumar",mark:65},{name:"vijay",mark:75}];
 let names=students.filter(stu=>stu.mark>50).map(stu=>stu.name);
    console.log(names);

    const person={
        name:"kavitha",
        age:25,
        city:"chennai"


    };
    for(let key in person){
        console.log(key,person[key]);
    }

    let fruits=["apple","banana","orange","grape","kiwi"];  
    for(let fruit of fruits){
        console.log(fruit);
    }
    fruits.forEach(fruit=>console.log("hello"+fruit));

    let num=[10,20,30];
    let total=num.reduce((sum,cur)=>sum+cur,0);    
    console.log(total);

    const arr1=[1,2,3,4,5];
    const arr2=[3,4,5,6,7];
    const arr3=arr1.concat(arr2);
    console.log(arr3);
    const combine=[...arr1,...arr2];
    console.log(combine);