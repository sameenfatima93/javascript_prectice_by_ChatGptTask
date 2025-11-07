//_______task_5_____loopingArry____///////////////////

var fruits =["apple", "Banana " , "Orange" , "Mango"];
console.log(fruits[3]);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.pop();  //pop me khali popor () dyny prty hen jo last ky element ko remove kr dyta hy 
fruits.push("graphs")  //push me ()ky ander string dyna hota hy jo last me add krna hy
fruits.shift() //is me sirf shift or () dyna hota hy jo arry ky start sy ek ko remove krta hy
fruits.unshift("peach") // is me hume () ky ander dyna hota hy us ko jesy start me add krwana ho

console.log(fruits);


