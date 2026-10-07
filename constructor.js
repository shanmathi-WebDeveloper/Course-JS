let a={
    name:"shan",
}


function User (){           //constructor name should starts with upper case letters
    this.name="shan";

}


//===============================================================================================
function add(){
    this.a=5;
    this.b=10;
    this.add=function(c){
        return this.a+ this .b +c
    }
}
let Sum = new add();
console.log(Sum.add(4))