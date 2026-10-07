//logical operator in javascript
//logical AND , OR , NOT , NULL Coalescing operator


//truth table for OR operator
//     A  B   A||B
//     1  1   1
//     1  0   1
//     0  1   1
//     0  0   0

//truth table for AND operator
//     A  B   A&&B
//     1  1   1
//     1  0   0
//     0  1   0
//     0  0   0

//truth table for NOT operator
//     A   !A
//     1   0
//     0   1


//eligible for mrge
let age=19;
let gender='Female';

if(age>18 && gender=='Female'){
    console.log('Eligible for marriage');
}
else{
    console.log('Not Eligible for marriage');   
}

//
let Age=26;
let Gender='Female';

if(Age>=21 || (Age>=18 && Gender=='Female')){
    console.log('Eligible for marriage');
}
else{
    console.log('Not Eligible for marriage');   
}


//NULL COALESCING OPERATOR (??)
let AGE;
let cur_age= AGE ?? 25;    //if AGE is undefined or null then cur_age will be assigned the value 25
console.log(cur_age); // Output: 25


//excercise
console.log(null || 0 || undefined); // Output: undefined