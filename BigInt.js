//Big integer
//2^53-1 = 9007199254740991  //its is the numbr datatype limit otherwise  below details

console.log(9007199254740991+1)  //correct
console.log(9007199254740991+2)  //wrong
console.log(9007199254740991+3)  //correct answer

//odd number returns wrong answers and even number returns correct answers

let limit = 9007199254740991n;     //it is an big int

//if we we made a + operation in bigint number thats the opposite side number also be a big int

console.log(limit + 1n);
console.log(limit + 2n);
console.log(limit + 3n);

console.log(typeof limit);

let periyaNumber=12345678910n;
numbers=periyaNumber+2026n
console.log(numbers);
console.log(typeof numbers);
console.log(typeof periyaNumber);