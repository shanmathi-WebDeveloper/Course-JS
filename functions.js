let a=12, b=24;


function operation(var1,var2){      //function declaration
    console.log((var1+var2*var2/var1)*var2);

}
operation(a,b)    //function calling
operation (4,6)
//=================================================================================

function operation(var1,var2 =5){      //function declaration and default value
    console.log((var1+var2*var2/var1)*var2);

}
operation (4)

//=================================================================================
let c;                 //global variable
function operation(var1,var2){     
    let c=((var1+var2*var2/var1)*var2);    // c is local variable

}
console.log(c);  //undefined because c is declared inside the function and it is not accessible outside the function

//=================================================================================

function operation(var1,var2){     
    let c=((var1+var2*var2/var1)*var2);    // c is local variable
    return c;  //returning the value of c to the calling function

}
console.log(typeof operation(4,6));  //number because the function returns a number

//=================================================================================
//exercise

function operFind(a){
    let b=(a%2==0)?'even':'odd';  //conditional operator
    return b;
}
console.log(operFind(50));  //odd


let oddOrEven= operFind
console.log(oddOrEven(67));  //store the function in a variable and call it using the variable name

//=================================================================================

let s=11;
let OddOrEven= function(s){   //function expression
    if(s%2==0){
        return "even";
    }
    console.log('here');
    return "odd";
}

console.log(OddOrEven);


//=================================================================================

//name less functions are arrow functions
let S=11;
let OddOreven= (s) => {   //function expression
    if(S%2==0){
        return "even";
    }
    console.log('here');
    return "odd";
}

console.log(OddOreven);

//=================================================================================
let q=6;
let oddEven= (q) => (q%2==0)?'even':'odd';  //arrow function with conditional operator
console.log(oddEven(67));  //store the function in a variable and call it using the variable name



//=================================================================================
//call back function (function passed as an argument to another function)

function Operation (op,a,b){
    return op(a,b);  //calling the function passed as an argument
}

let add = (a,b) => a+b;  //arrow function

function sub(a,b){
    return a-b;

}

console.log(Operation(add,4,6));  //calling the function with add as an argument
console.log(Operation(sub,4,6));  //calling the function with sub as an argument

//=================================================================================
//exercise

let trivia=(e)=>(e*5);


console.log(trivia(7));  //calling the function with q as an argument