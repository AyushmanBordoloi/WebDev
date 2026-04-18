// var a = 1;
// a = "Ayushman";
// a = true;

// console.log(a);


// let b = "Ayushman";
// const age = 21;
// var isStudent = true;

// console.log(b);
// console.log(age);
// console.log(isStudent);


// let color = "red";
// const height = 175;
// var likesPizza = true;

// console.log(color);
// console.log(height);
// console.log(likesPizza);


// let isEqual = (10 === 10);      //Comparison operator
// let isTrue = (true && false);   //Logical AND operator

// console.log(isEqual);
// console.log(isTrue);


// let firstName = "Ayushman";
// let lastName = "Bordoloi";
// let name = firstName + " " + lastName;  //String concatenation

// console.log("Hello, "+ name + "!");


// function greet(name) {
//     console.log("Hello, " + name + "!");
//     console.log("Namaste, " + name + "!");
//     console.log("Welcome to JavaScript!");
// }

// greet("Ayushman");
// greet("Ayushman Bordoloi");


// function isAllowed(age){
//     if(age>=18){
//         console.log("you're allowed to vote.");
//     }else{
//         console.log("you're not allowed to vote.");
//     }
// }

// isAllowed(21);
// isAllowed(17);
// isAllowed(18);


// for(let i=0; i<5; i++){
//     console.log("For Loop Iteration: "+ i);
// }

// let j = 0;
// while(j<5){
//     console.log("While Loop Iteration: "+ j);
//     j++;
// }


function isAllowed(age){
    if(age >= 18){
        console.log("You're allowed to vote. Your age is: " + age);
    }else{
        console.log("You're not allowed to vote. Your age is: " + age);
    }
}

for(let i=1; i<=60; i++){
    isAllowed(i);
}