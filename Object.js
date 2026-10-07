let user={
    name:"shanmathi",
    age:20,
    gender:"female",
}

console.log('mark' in user);  //false
console.log('name' in user);  //true

for (let key in user){
    console.log(key);  //name, age, gender
    console.log(user[key]);  //shanmathi, 20, female
    console.log(key+"-"+user[key]);  //name:shanmathi, age:20, gender:female
}


//==================================================================================
let a=10;
let b=a;

console.log(a,b);  //10, 10
b=20;
console.log(a,b);  //10, 20

//==================================================================================
let obj1={
    name:"shanmathi",
    age:20,
    gender:"female",
}
let obj2=obj1;  //obj2 is a reference to obj1
console.log(obj1,obj2);

obj2={};
console.log(obj1,obj2);  //obj1 is not affected by obj2

//==================================================================================
let obj3={
    name:"shan",
    age:20,
    gender:"f",
}
let obj4=obj3;  //obj4 is a reference to obj3
console.log(obj3,obj4);

obj4.age=30;  //obj4 is a reference to obj3, so obj3 is also affected
console.log(obj3,obj4);

//==================================================================================

const ob1={
    name:"shanmathi",
    age:20,
    gender:"female",
}

ob1:{};                      //using const datatype didn't change it
console.log(ob1);

//=================================================================================

const ob2={
    name:"shanmathi",
    age:20,
    gender:"female",
}

ob2.age=21;                      
console.log(ob2);

//==================================================================================
//garbage collection

let oj1={
    name:"shanmathi",
    age:20,
    gender:"female",
}

console.log(oj1);

oj1= null;
console.log(oj1);

//==================================================================================

let A={
    name:"shanmathi",
    age:20,
    gender:"female",
}
console.log(A);
b=A;
console.log(b);
A={};
console.log(b,A)
