// function isAllowed(name, age){
//     if(age>=18){
//         console.log(name + " is allowed to vote.");
//     }else{
//         console.log(name + " is not allowed to vote.");
//     }
// }

// var user1 = "Ayushman";
// var pass1 = "pass123";
// var age1 = 23;

// var user2 = "Bordoloi";
// var pass2 = "pass456";
// var age2 = 17;

// isAllowed(user1, age1);
// isAllowed(user2, age2);
// isAllowed("Charlie", 18);
// isAllowed(user1, age2);


// function isAllowed(user){
//     if(user.age>=18){
//         console.log(user.name + " is allowed to vote.");
//     }else{
//         console.log(user.name + " is not allowed to vote.");
//     }
// }

// //Objects
// let user1 = {
//     name: "Ayushman",
//     pass: "pass123",
//     age: 23,
//     address: {
//         city: "Guwahati",
//         state: "Assam",
//     }
// }

// let user2 = {
//     name: "Bordoloi",
//     pass: "pass456",
//     age: 17,
// }

// isAllowed(user1);
// isAllowed(user2);
// console.log(user1.name + " lives in " + user1.address.city);


// let users = ["Ayushman", "Bordoloi", "Charlie", "David", "Eve"];
// let ages = [23, 17, 18, 25, 30];
// let isStudent = [true, false, true, false, true];

// console.log(users[0]);
// console.log(users[2]);
// console.log(users.length);

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }


//Array of objects
// function isAllowed(user){
//     if(user.age>=18){
//         console.log(user.name + " is allowed to vote.");
//     }else{
//         console.log(user.name + " is not allowed to vote.");
//     }
// }

// let users = [{
//     name: "Ayushman",
//     pass: "pass123",
//     age: 23,
//     isStudent: true,
//     address: [{
//         city: "Guwahati",
//         state: "Assam",
//     },{
//         city: "Mumbai",
//         state: "Maharashtra",
//     }]
// },{
//     name: "Bordoloi",
//     pass: "pass456",
//     age: 17,
//     isStudent: false,
// },{
//     name: "Charlie",
//     pass: "pass789",
//     age: 18,
//     isStudent: true,
// }];

// // let x = users[0].name;
// // console.log(x);

// // isAllowed(users[0]);
// // isAllowed(users[1]);
// // isAllowed(users[2]);

// for(let i = 0; i < users.length; i++){
//     isAllowed(users[i]);
// }

// console.log(users[0].name + " have a bunglow in " + users[0].address[1].state);


//Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male.
function isAllowed(user){
    let allowedUsers = [];

    for (let i = 0; i < users.length; i++){
        if(users[i].age > 18 && users[i].gender == "male"){
            allowedUsers.push(users[i]);
        }
    }
    return allowedUsers;
}

let users = [{
    name: "Ayushman",
    gender: "male",
    age: 23,
},{
    name: "Bordoloi",
    gender: "male",
    age: 17,
},{
    name: "Charlie",
    gender: "female",
    age: 18,
},{
    name: "David",
    gender: "male",
    age: 25,
}]

let legalAllowedUsers = isAllowed(users);
console.log(legalAllowedUsers);