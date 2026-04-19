// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8"); //reading file synchronously
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);


// function sum(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }

// function doArithmatic(a, b, fn){
//     if(fn == "sum"){
//         return sum(a, b);
//     }
//     if(fn == "sub"){
//         return sub(a, b);
//     }
// }

// const ans1 = doArithmatic(10, 5, "sum");
// const ans2 = doArithmatic(10, 5, "sub");

// console.log(ans1);
// console.log(ans2);

//OR

// function sum(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }

// function doArithmatic(a, b, fn){
//     return fn(a, b);
// }

// const ans1 = doArithmatic(10, 5, sum);
// const ans2 = doArithmatic(10, 5, sub);

// console.log(ans1);
// console.log(ans2);


//Simple Calculator
// function add(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }
// function mul(a, b){
//     return a * b;
// }

// function div(a, b){
//     if(b == 0){
//         return "Error: Division by zero is not allowed.";
//     }
//     return a / b;
// }

// function Calculator(a, b, op){
//     return op(a, b);
// }

// console.log(Calculator(10, 5, add));
// console.log(Calculator(10, 5, sub));
// console.log(Calculator(10, 5, mul));
// console.log(Calculator(10, 5, div));
// console.log(Calculator(10, 0, div));


// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(error, contents){
//     console.log(contents);
//     console.log(contents);
// });

// const fs = require("fs");

// function fileReadCallback(err, contents){
//     console.log(contents);
//     console.log(contents);
// }

// fs.readFile("a.txt", "utf-8", fileReadCallback);

// let s = 0;
// for(let i = 0; i<100000; i++){
//     s +=i;
// }
// console.log(s);


//Not asynchronous code (busy wait)
// let a = 30;
// let b = 16;
// console.log(a);
// console.log(b);

// //wait for 1 sec
// let timeBefore = Date.now();
// for(let i = 0; i < 1000000000; i++){
//     let timeNow = Date.now();
//     if(timeNow - timeBefore >= 1000){
//         break;
//     }
// }
// console.log(a + b);


// let a = 30;
// let b = 16;

// console.log(a);
// console.log(b);

// function callback(){
//     console.log(a + b);
// }

// setTimeout(callback, 1000); //calls the callback function after 1 second

// for(let i = 0; i < 100; i++){
//     console.log("Doing some work...");
// }

let ctr = 0;
function callback(){
    console.log(ctr);
    ctr+=1;
}

setInterval(callback, 1000); //calls the callback function every 1 second

let x = 1;
for (let i = 1; i < 100; i++){
    x = x+i;
}

console.log(x);