///////_______task3(FindingLargestNumber)_________///////

function largestNumber (num1,num2,num3){
    if (num1 > num2 && num1 > num3) {
        console.log(num1  + " is the largest number  " );    
    }else if (num2 > num1 && num2 > num3){
        console.log(num2 + " is the largest number ");
    }else if(num3 > num2 && num3 > num1){
        console.log(num3 + " is the largest number");
        
    }else{
        console.log("thank you");
        
    }
}

largestNumber(30,62,90)


//////____________task_with_prompt_________///////

// var num1 = +prompt("enter 1st number")
// var num2 = +prompt("enter 2nd  number")
// var num3 = +prompt("enter 3rd number")
// function largestNumber (n1,n2,n3){
//     if (n1 > n2 && n1 > n3) {
//         console.log(n1  + " is the largest number  " );    
//     }else if (n2 > n1 && n2 > n3){
//         console.log(n2 + " is the largest number ");
//     }else if(n3 > n2 && n3 > n1){
//         console.log(n3 + " is the largest number");
        
//     }else{
//         console.log("no one is larger all are equal");
        
//     }
// }
// largestNumber(num1,num2,num3)