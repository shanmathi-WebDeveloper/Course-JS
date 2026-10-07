//inheritance and Overriding

class Animal{
    legs;
    tail;

    constructor(legs,tail){
        this.legs=legs;
        this.tail=tail;

    }
    display(){
        console.log("animal constructor")
        console.log(this.legs);
        console.log(this.tail);
    }
}

class Human extends Animal{
    nationality;

    constructor(legs,tail, nationality){
        // this.legs=legs;
        // this.tail=tail;
        super(legs,tail);
        this.nationality=nationality;
    }
     display(){
        console.log("human constructor")
        console.log(this.legs);
        console.log(this.tail); 
        console.log(this.nationality);
        console.log(this.legs);
    }
}

let anime =new Animal(2,false);
anime.display()

let hum =new Human(4,false,"indian");
// console.log(hum)
hum.display();