/* console.log("start");
setTimeout(() => {
    console.log("timeout 1"); 
},5000)
console.log("end"); */



/* setTimeout(() => {
    console.log("made tea");
    setTimeout(() => {
        console.log("made coffee");
        setTimeout(() => {
            console.log("made milk");
        }, 5000);
    }, 1000);
}, 1000); */

let iceCreamPromise = new Promise((resolve, reject)=>{
    let isIceCreamReady = true;
    if(isIceCreamReady){
        resolve("Hurray!..Ice cream is ready");
    }
    else{
        reject("Sorry!..Ice cream is not ready");
    }
});
/*  iceCreamPromise.then((message)=>{
    console.log("Yay!.."+ message);
})
.catch((error)=>{
    console.log("Oh no!.."+ error);
});  */
async function getIceCream(){
    try{
        let msg = await iceCreamPromise;
        console.log("yay!"+msg);
    }
    catch(error){
        console.log("oops"+ msg);
    }
} 
getIceCream();



    