//JSON in javascript  
//JSON - JavaScript Object Notation

//how to change the object to json  and  json to object


// 1. json  --> string
let user={
    name:"shan",
    age:25,
    salary:10000

};
console.log(JSON.stringify(user))
console.log(typeof(JSON.stringify(user)))

//2. json format string --> object

let User= '{"name":"mathi" , "age":23 , "place":"pollachi"}'

console.log(JSON.parse(User))
console.log(typeof(JSON.parse(User)))