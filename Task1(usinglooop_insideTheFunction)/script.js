////////________prectice loop_______///////////////

// var name = prompt("Enter any word to check if it's a palindrome or not");
// var result = "";

// for (var i = name.length - 1; i >= 0; i--) {
//   result += name[i];
// }

// if (name.toLowerCase() === result.toLowerCase()) {
//   console.log("It's a palindrome");
// } else {
//   console.log("It's not a palindrome");
// }

// console.log(result);


//////////////////////////////////////////
///__________________________////////////
////  MOVING TO THE MAIN TAS   ////////////
///___________________________////////
// ////////////////////////////////////////

// function findPalindrome(str){
//     var result = "";
//     for(var i = str.length -1 ; i >= 0 ; i-- ){
//         result += str[i];
//     }
//     if(str.toLowerCase() === result.toLowerCase()){
//         console.log("it's a Palandirome");
        
//     }else{
//         console.log("it's Not a palandirom");
        
//     }
//     // return result;
// }
// findPalindrome("madam")
// findPalindrome("sameen")
// console.log("");

// console.log(findPalindrome("hello"));




///______function()_,_=>_function________//////


///////____________simple function_______///////////////////
// function greet(){
//     console.log("hello");
    
// }
// greet()


///////////______parametter argument_______//////////



// function greet(name){
//     console.log("my name is " + name);
    
// }
// greet("sameen")

/////______using return keyword________///////

// function addNum(num1,num2){
//     return num1 + num2
// }
// var result = addNum(30,70)
// console.log(result);

// function greet(name){
//     return name;
// }
// console.log(greet("hello sameen"));

//////_____function_scope(veriable inside the function)

// var name= "sameen"
// function nameMe(){
//     console.log(name);
    
// }
// nameMe()
// console.log(name); // not working

////////___understanding see when variable deffin inside the function then if you console inside the function and call the function outside thats work propperly but if you console this inside function variable out of the function tha is not working because the variable declere inside the function thats why this call function scope_________//////////////////////////


////_______types_of_function_______////////////////

//__1)function declaration________________________

// function greet(){
//     console.log("hello");
    
// }
// greet()

//__2)function_expression______________________________

// var greet = function(){
//     console.log("hello there!");
    
// }
// greet()

//___3)Arrow_function_______________________________

// var hello = () =>{
//     console.log("hi tehre! whats up");
// }
// hello()

//___4)If your function has only one statement, you can skip {}:

// var hello = name => console.log("hello " + name);
// hello("sameen")

//__5)And if it returns something: without using {} and with arrow function =>

    // var multiply = n => n * n
    // console.log(multiply(6));
    
//________task____________________//////

// function data(name,age){
//     console.log("my name is " + name + " and i am " + age + " years old");  
// }
// data("Sameen" , 30)
// data("Hina" , 20)
// data("Aruba" , 25)



//______Task 2 — Function that Returns the Area of a Rectangle

// function rectangleArea(lenght,width){
//     return lenght * width  
// }
// var result = rectangleArea(20,10);
// console.log(result);

function rectangleArea(lenght,width){
    return lenght * width
}
var userLenght = +prompt("enter lenght")
var userWidth =+prompt("enter width")
var result = rectangleArea(userLenght , userWidth)
console.log("the area of rantngle is: " + result);


