 //promise

 isHalwa=true

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
    
 function buyHalwa(){
    WaitInQueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('go home')
    })

 }

 buyHalwa(); 
 console.log("halwa wala")
