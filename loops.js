//iteration statements
//for loop , while loop, do while loop

//Initialization, condition, increment/decrement

//printing 1 to 10 using for loop
let i;
for(i=0;i<=10;i++){
    console.log(i);
}


//printing 1 to 10 using while loop (entry controlled loop)
let j=0;
while(j<=10)
{
    console.log(j);
    j++;
}

//printing 1 to 10 using do while loop (exit controlled loop)
let k=0;
do{
    console.log(k);
    k++;
}while(k<=10)


    //ercercise
//factorial of a number using for loop
let n=4
let ans=1;
for(let i=1;i<=n;i++){
    ans=ans*i;
}
 console.log(ans); // Output: 24

let num=5;
let factorial=1;
let I=1;
while(I<=num){
    factorial=factorial*I;
    I++;
}
console.log(factorial); // Output: 120


let a=0;
for(let i=1;i<=5;i++){
    a=a+i;
}
console.log(a); // Output: 6


let q=5;
let w =0;
let r=1;
while(r<=q){
    w=w+r;
    r++;
}
console.log(w); // Output: 15

//jump statements
//break statement, continue statement

let N=6;
let Ans=1;
for(let i=1;i<=N;i++){
    if(i==3){
        break;                       //it will break the loop when i is equal to 3 and exit the loop
    }
    Ans=Ans*i;
}
 console.log(Ans);


let N1=4;
let Ans1=0;
for(let i=1;i<=N1;i++){
    if(i==2){
        continue;                       //it will skip the current iteration when i is equal to 3
    }
    Ans1=Ans1+i;
}
 console.log(Ans1);



//add all odd numbers from 1 to n using for loop
let n1=10;
let ans1=0;
for(let i=1;i<=n1;i++){
    if(i%2==0){
        continue;                      
        
    }
    ans1=ans1+i;
}
 console.log(ans1);
