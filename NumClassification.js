let x=10;
if(x>0){
    console.log("x is positive");
}
else if(x<0){
    console.log("x is negative");
}
else{
    console.log("x is zero");
} 


//nested if else

let year=2018;
//divide by 4 and 
// divide by 100 or divide by 400 
if(year % 4==0 )  {
    if(year % 100==0){
        if(year % 400==0){
            console.log("leap year");
        }
        else{
            console.log("not leap year");
        }

}
}
else{
    console.log("not Leap year");
}


//excercise
let a=37;
if(a%2==0){
    console.log("even number");
}   
else if(a%2!=0){
    console.log("odd number");
}
else{
    console.log("not a number");
}