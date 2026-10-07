//array (single dimensional array)

let veg=new Array();
veg = ['carrot','potato','beetroot']
console.log(veg);
console.log(veg[2])
veg[3]="beans"
console.log(veg)
veg.push('tomato')             //add in last
console.log(veg)
veg.unshift('onion')           //add in first
console.log(veg)
veg.pop()                      //delete last item
console.log(veg)
console.log(veg.pop())         //what will be removed it will show  
veg.shift()                    //remove the first element in the array
console.log(veg)


let details=["shan", 20, 'chennai', true ,undefined, null, {name:"shanmathi", age:21},function add(a,b) {return(a+b)}]
console.log(details)
console.log(details [7](3,5))


for(vege of veg){                //it will return the value (using of)
    console.log(vege)
}

for(vege in veg){                //it will return the index value (using in)
    console.log(vege)
}

console.log(veg.length)

//two dimensional array (matrix)
let mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(mat)
console.log(mat[2][0])

for(let i=0;i< mat.length;i++){                  //row wise
    for (let j=0;j<mat[i].length;j++)            //particular row ,column wise
    console.log(mat[i][j])
}