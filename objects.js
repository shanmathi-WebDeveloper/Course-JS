//variable declaration
 let q;
 console.log(q);

 //object declaration
 let obj={}
 console.log(typeof(obj));

 let car={
        name:'BMW',
        brand:'X5',
        color:'black',
        price:50000,
 }
 console.log(car);

 //
 let Car={
        name:'BMW',
        brand:'X5',
        color:'black',
        price:50000,
 }
 console.log(Car.brand);

 //
 let EngineOptions= "pertol, diesel";

 let Car1={
        name:'BMW',
        brand:'X5',
        driveTrain:EngineOptions+',electric',
        color:'black',
        price:50000,
 }
 console.log(Car1.driveTrain);

 //
 let car1={
        name:'BMW',
        brand:'X5',
        "drive Train":EngineOptions,
        color:'black',
        price:50000,
 }
 console.log(car1["drive Train"]);
 delete car1.color;  //delete the color property from the object
 console.log(car1);

 car1['modelYear']=2026;  //add a new property to the object
 console.log(car1);

 car1.price=1000000;  //update the price property of the object
 console.log(car1);

 //==================================================================================

 let car01={
        name:'BMW',
        brand:'X5',
        "drive Train":EngineOptions,
        color:'black',
        price:200000,
        onRoadPrice(){
            return this.price+2;          //this refers to the current object
        }
 }
 console.log(car01.onRoadPrice());  //calling the method of the object

 //==================================================================================
 //exercise
 let user={};
 user.name="shanmathi";
 user['name']="M. Shanmathi";
 user.age=20;
 delete user.age;
 console.log(user);