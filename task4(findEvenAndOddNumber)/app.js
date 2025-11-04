////______task_4__finding_EvenAndOdd__________/////////


function checkEvenOrOdd(num) {
    if (num % 2 === 0) {

        console.log("it's even number");
        
    }else{
        console.log("it's odd number");
        
    }
}
var num = +prompt("enter any number")
checkEvenOrOdd(num)