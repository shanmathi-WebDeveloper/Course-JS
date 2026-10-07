//classes concept


//objects
let user={
    name:"shan",
    age:23,
    display: function(){

    }
}


//classes
class User{

    // name="shan";
    // age=23;
    #name;                              //private variable (this name is only access for 3 methods only in this class (constructor, display, get))
    #age
    constructor(name,age){
        this.#name=name;
        this.age=age;
    }

    display(){
        console.log('NAME:' ,this.#name);
        console.log('AGE:' , this.age);
    }

    get name(){
        // return this.#name;
        return "Name:"+this.#name;
    }
    get age(){
        return this.#age;
    }

    set name(name){
        if(name == ' shan'){
        this.#name='code';
        }
        else{
            this.#name=name;
        }

    }

    set age(age){
        this.#age=age;
    }

}


let shan =new User('shan', 24);

console.log(shan)
console.log(typeof(shan))

shan.display()

console.log(shan.age)
console.log(shan.name)

