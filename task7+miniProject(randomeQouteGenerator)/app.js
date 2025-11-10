const qoutes = [
    '"Dreams do not work unless you do."',
    '"Begin anywhere."',
    '"If you can dream it, you can do it."',
    '"Be yourself; everyone else is already taken."',
    '“Change the world by being yourself.”',
    '“Everything you can imagine is real.”',
    '“Love yourself first and everything else falls into line.”',
    '“There is no substitute for hard work.”',
    '“It is never too late to be what you might have been.”',
    '“Because you are alive, everything is possible.” ',
    '“A warm smile is the universal language of kindness.”',
    '“Decisions without actions are worthless.”',

]
let bgdiv = document.getElementById("bgdiv");
let qoutePara = document.getElementById("qoute");
let qouteBtn = document.getElementById("newQoute");
qouteBtn.addEventListener("click" , () => {
    qoutePara.classList.add("fade")

    setTimeout(() => {
        let randomeIndex = Math.floor(Math.random() * qoutes.length);
        qoutePara.textContent = qoutes[randomeIndex]

        let randomColor = `hsl(${Math.floor(Math.random()* 360 )} 80% , 40%)`;
         let randombgColor = `hsl(${Math.floor(Math.random()* 360 )} 100% , 90%)`;
        qoutePara.style.color = randomColor;
        bgdiv.style.backgroundColor = randombgColor;
        // qoutePara.style.backgroundColor = randomColor;

        qoutePara.classList.remove("fade")
    }, 500 )
})

// console.log(qouteBtn, qoutePara);

// document.getElementById("newQoute").addEventListener("click" , function(){
//     // alert("button was cliked")
    
// })