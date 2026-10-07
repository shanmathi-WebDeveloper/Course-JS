 //promise

 isHalwa=false

 function WaitInQueue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isHalwa){
                resolve('buy it');
            }
            else{
                reject('halwa finished');
            }
        },1000);
    });
 }
    
async function buyHalwa(){
    try{
    let result=await WaitInQueue();
    console.log(result)
    }
    catch(error){
        console.log('halwa over')

    }
   

 }

 buyHalwa(); 
 
