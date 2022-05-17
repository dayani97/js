//Ex 01

//function 1

function calAge(futureYear, birthYear){
    calourAge = futureYear - birthYear;
    console.log(calourAge);
}

calAge(2012, 1996);

let age = (futureYear, birthYear) => {
    let age = futureYear - birthYear;
    return age;
    
}

console.log(age(2022,1997));

//function 2

// 01)
/*
const celsius  = 32;
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(` ${celsius}°C to ${fahrenheit}°F`);
*/



//02)

const fahrenheit = 89;
let celsius = (fahrenheit - 32) * 5/9;
celsius = Math.floor(celsius);
console.log(` ${fahrenheit}°F to ${celsius}°C `);



//function 3 condition

function assignGrade(Marks){
    if (Marks >= 75)
       console.log('A');

    else if (Marks >= 60)
        console.log('A');

    else if (Marks >= 45)
        console.log('A');

    else
       console.log('F');
       
}

assignGrade(90);


//function 4 switch

let month = 12;

switch(month){
    case 1:
        month = 'January';
        break;
    
    case 2:
        month = 'Febuary';
        break;

    case 3:
        month = 'March';
        break;
        
    case 4:
        month = 'April';
        break; 
        
    case 5:
        month = 'May'

    case 6:
        month = 'June';
        break;

    case 7:
        month = 'July';
        break;

    case 8:
        month = 'August';
        break;

    case 9:
        month = 'September';
        break;

    case 10:
        month = 'October';
        break;

    case 11:
        month = 'November';
        break;

    case 12:
        month = 'December';
        break;

}
  
console.log(`This is ${month}`);

//function 5 Loop Exercises

// 01)

for (var x=0; x<=20; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

// 02)

const number = parseInt(prompt('Enter a positive integer: '));


if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}


else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}


else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

// 03)

const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');


let min = (num1 > num2) ? num1 : num2;

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
