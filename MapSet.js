//Map 


let map=new Map()

map.set(1,"Autodesk")                         //(key, 'value')
map.set('two',"Forge")
    .set(3,"Developer")
    .set('four',"Chennai")

console.log(map);
console.log(typeof(map));

console.log(map.get(2))                              //position value
console.log(map.has(2))                              //check if it is present or not
map.delete(4)                                        //delete the map data
//map.clear();                                       //clear all the data in the map
console.log(map)
console.log(map.size)                                //check the size of the map    


for (key of map.keys()){                             //its return the keys
    console.log(key)  
}

for (key of map.values()){                           //its return the values
    console.log(key)
}

for (key of map){                                    //its return the all the keys and values
    console.log(key)
}

//Set           (set only store unique value)

let set=new Set();

set .add("pollachi")
    .add("coimbatore")
    .add("chennai")
    .add("pollachi")
    .add("Coimbatore")
    .add(24)
    
console.log(set);
console.log(typeof(set))

set.delete(1)
console.log(set.has("pollachi"));

// set.clear();
console.log(set);


for (s of set){
    console.log(s)
}

//========================================================================

let set1 =new Set()
    set1.add(6)
        .add(7)
        .add(4)
        .add(4)
        .add(2)
        .add(1)
        .add(0)
        .add(0)
        .add(8)
        .add(0)
    console.log(set1)
    console.log(set1.size)              //it is not a function () ,it is a property
    
