//______first prectice for addEventListner_____________

// document.getElementById("add").addEventListener("click" ,function (){
//     alert("button was cliked")
// })


// function showText() {

//     var content = document.getElementById("text").innerHTML;
//     console.log(text);
// }

/////____________changing text and color html from JavaScript________//////////////////////////

// document.getElementById("change").addEventListener("click", function(){
//     console.log("hello");
//      var changeColor = document.getElementById("text");
//      changeColor.innerHTML="wow! you perfectly click the button";
//      changeColor.style.color = "yellow"
// })


/////___________rendom body background color change thorought javascript__________________________///////////////


// document.getElementById("bgChange").addEventListener("click" , function(){
//     let rendomeColor = "#" + Math.floor(Math.random() * 16777256).toString(16)
//     // console.log(rendomeColor);
//     document.body.style.backgroundColor = rendomeColor;
//     console.log("color change to rendome color");


// })

///////________rendome spacific div background color changing through javaScript and click the button__________________________////////////////

// document.getElementById("bgChange").addEventListener("click", function () {
//     let rendomeColor = "#" + Math.floor(Math.random() * 16777256).toString(16)
//     // console.log(rendomeColor);
//     document.getElementById("color").style.backgroundColor = rendomeColor;
//     console.log("color change to rendome color");


// })

///////___________rendom color change just on mouse over____________________________________//////////


document.getElementById("color").addEventListener("mouseover", function () {
    let rendomeColor = "#" + Math.floor(Math.random() * 16777256).toString(16).padStart(6, "0");
    // console.log(rendomeColor);
    document.getElementById("color").style.backgroundColor = rendomeColor;
    console.log("color change to rendome color");


})
