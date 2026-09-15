//axios vs fetch

const axios = require('axios');

/*
async function main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await response.json();
    console.log('Fetch Response: ', jsonData);
}
*/

/*
async function main(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //response.data => is the json data and axios knows that data that coming back is json so no need to conver
    console.log('Axios Response: ', response.data);
}
*/

//POST REQUEST

/*
async function main() {
    const response = await fetch('https://httpdump.app/dumps/88ac2f7f-d1e6-4e1f-bb68-050e891e6371', {
        method: "POST",
        body: JSON.stringify({
            username: "ayushman",
            password: "1234567"
        }),
        headers: {
            "Authorization": "Bearer 123",
            "Content-Type": "application/json"
        }
    });
    const reqdData = await response.text();
    console.log(reqdData);
}
*/

async function main() {
    const response = await axios.post("https://httpdump.app/dumps/88ac2f7f-d1e6-4e1f-bb68-050e891e6371", {
        //works with get, post, put, delete
        //body required as the second argument whenever the request (post, put, delete) can send back a body. i.e. body not required during GET request
        body:{
            username: "ayushman",
            password: "9876543"
        },
        headers: {
            "Authorization": "Bearer 456"
        },
    });
    console.log(response.data)
}


main();