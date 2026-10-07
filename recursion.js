//recursive function (call by itself)

//1. base case
//2. upadte statement
//3. recursive call

//n=5! --> 5*4*3*2*1 =120
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1)

}
console.log(factorial(5))



//addition in recursive
function add(n){
    if(n==1){
        return 1;
    }
    return n+add(n-1)
}

console.log(add(5))