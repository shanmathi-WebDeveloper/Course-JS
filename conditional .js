//if part
let Adult=false;
let age =19;
if(age>18){
    Adult=true;

}
console.log(Adult)

//else part
let adult;
let age1=17;
if(age1>18){
    Adult=true;
}
else{
    Adult=false;
}
console.log(Adult)

//else if part
let adult1;
let age2=18;    
if(age2>18){
    adult1="adult";
}       
else if(age2==18){
    adult1="child";
}       
else{
    adult1='not adult';
}
console.log(adult1)

//conditional operator
let age3=19;
let adult2=(age3>18)?'adult':'not adult';
console.log(adult2)

//conditional operator with multiple conditions
let age4=19;
let adult3=(age4>18)?'adult':(age4==18)?'child':'not adult';
console.log(adult3)


//excercise
if('0'){
    console.log('Hello');
}
//it will print Hello because '0' is a truthy value in JavaScript. In JavaScript, any non-empty string is considered truthy, 
// so the condition evaluates to true and the code inside the if block is executed.