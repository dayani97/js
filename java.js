/*
 window.alert("hi");
document.write("daya");
console.log("hello world" ); 



var x;
x=5;
x=10;
console.log(x);



let x = 15;
console.log(x);
x = 7;
console.log(x);


const x = 15;
console.log(x);
x = 7;
console.log(x);
 

console.log("hello");
console.dir("hello");
console.table("hello");
console.warn("hello");
console.error("hello");
console.clear("hello");

console.log("hello % C there,Color:Red");

 let fruits="apple";
 console.log(fruits); 
 */

// let person = {name:"karan",age:50, Address:"Jaffna,Srilanka"};
//  console.log (person);
//  console.log(person.name);
//  person.name="raja";
//  console.log (person.name);

// 


//let colors=["red","green","blue","yellow"];
//console.log(colors);
// colors.pop();
// console.log(colors.pop());

/*console.log("hello\"world\"");
console.log('my father\'sname');
console.log('hello\n world');
{ let x = 25; 
console.log(x);
} */

/*
function scope(){
    var  x = "world";
    console.log(x);
}
scope();


let scope1 = function(){

}  

function scope(){
    var  x = "world";
    console.log(x);
} 
scope();
function scope2(){
let scope1 = function(){
var y = "hello";
console.log(y);
}
scope1();
}
scope2();

function scope(){
    var  x = "world";
    return x
    
} 
console.log(x);
scope();

*/ 
/*

var scope = function(num){
    return num*num
}

console.log(scope(3));



var scope = (num1,num2) => {return num1*num2}
console.log(scope(4,2));

var scope = (num) => {return Math.PI*num*num}
console.log(scope(4));
*/

//var scope = (num) => {return Math.PI*r*r}
//console.log(scope(4));
/*
const person = {
    name:"Daya",
     age:25, 
     address:{
         city:'Jaffna',
         country:'Srilanka',
     }
}      
person.telephone=0779561580

for (let key in person)
{console.log(person);}
*/

// console.log("I am "+person.name+ " I am "+person.age+"years old. \n I lives in "+person.address+".");

/*
let num = [];
num[0]=5;
num[99]=77;

for (let n of num){
    console.log(n);
}
*/
// console.log(num);
//let abc = "Hello abc"

// document.write(abc);
//console.log(abc);
 /*
document.getElementById("submitbtn").addEventListener = 
("click", myclick);

function myclick(){
    document.getElementById("demo").innerHTML =
    "you have sucessfully clicked me";
}

document.getElementById("reset").addEventListener = 
("click", reset);

function reset(){
   document.getElementById("demo").innerHTML =
   "";
}
   */

// let number = [10,26,53,42,59]
// number.forEach (a =>{
//     console.log(a)
// });
// number.filter (a => a%2 === 0)
// .forEach (a =>{
//         console.log(a)
//     });
// number.map (a => a*2)
// .forEach (a =>{
//         console.log(a)
//     });
/*
number.reduce (addNumber = (previusVal,currentVal)=> {
    addNumber = previusVal + currentVal;
    return addNumber;
});
*/    
// addNumber(previusVal,currentVal);
// console.log(addNumber);


    //  let abc = (total,number) =>{
    //     abc= total+number;
    //     return abc;

    //  };
         
    let employee = [
        emp1={
        id:001,
        name1:'kamal',
        salary:20000,
        },

        emp2={
        id:002,
        name2:'mala',
        salary:30000,
        },

        emp3={
        id:003,
        name3:'raja',
        salary:45000,
        },

    ];
employee.reduce(function (previusVal,currentVal){
    num = previusVal+currentVal.salary;
    return num;
},0);
console.log(num);
    
        
