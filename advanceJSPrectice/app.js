//promices

 //let bucket =["apple","banana","mango","sugure","milk"]

// new Promise((resolve,rejected)=>{
//     let milkshake = true;
//     if(!milkshake){
//         resolve("your milkshake is ready")
//     }else{
//         rejected(new Error("sorry i can't do this"))
//     }
// })

// .then((milkShake)=>{
//     console.log("hare is " + milkShake); 
// })

// .then((abc)=>{
//     console.log("task is" + abc);
    
// })


//mathode2


let fruits =["apple","mango","banana"]
let myMilkShake= new Promise((resolve,reject)=>{
        if(fruits.includes("orange")&&fruits.includes("banana") ){
            resolve(" your milk is ready")
        }else{
            reject("sorry the shop is closse")
        }
 })

 myMilkShake.then((myChoice)=>{
    console.log("here is" + myChoice);
 }).catch((foult)=>{
    console.log(foult);
    
 })