//number data type
//in javascript integer and decimal  these two always comes under in 

let pi = 3.14;
let prime = 29;
console.log(pi,prime);
console.log(typeof pi ,typeof prime);

//special numeric values

let infi = Infinity;
let neginfi = -Infinity;
let nan = NaN;

console.log(infi);
console.log(neginfi);
console.log(typeof NaN);


//what a number are added to Nan mean that also change as Nan
//except Nan ** 0 =1 (power operator) tis is only converted into as 1 otherwise all are in NaN

console.log(1/0)   //in js anything divide by 0 is called as Infinity 