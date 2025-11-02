//////_________Task_2(finding vowels in a string with using function)____////


// var str = prompt("enter any sentence or word")
// var count = 0
// function vowels(str) {
//     for (let i = 0; i < str.length; i++) {
//         if ("aeiou".includes(str[i].toLowerCase())) {
//             count++
//         } else {
//         }
//     }
//     console.log(count)

// }
// vowels(str)



function vowels(str) {
    var count = 0
    var showVowel = ""
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            count++
            showVowel += str[i] + " ";
        } else {
        }
    }
    console.log("your sentence is : " + str)
    console.log("total vowels " + count)
    console.log("thease are vowels use in this sentence " + showVowel.toUpperCase())

}
var str = prompt("enter any sentence or word")

vowels(str)

