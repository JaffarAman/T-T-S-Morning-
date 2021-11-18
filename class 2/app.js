// function greet (value = "" ) {
    
//         // console.log(  "HELLO" +" " +value)
//         return "JAFFAR AMAN";
//     }



// console.log(greet("Jaffar Aman"))



// alert("ARGUMENTS")



// function greet( name  ){
    
//     console.log("EVENT FIRE....")
 
// }



// function userGreet(){

//     console.log("mouse button pr hai...")

// }

// function foo(){

//     console.log("mouse button pr nahi  hai...")

// }



// function foo2(){

//     console.log("double")

// }




// function input1 (){

//     console.log("FOCUS")

// }
// function input2(){

//     console.log("BLur")

// }


// function inp(){

//     console.log("on key up")

// }


// function add(){

//     var times = +prompt("How many value...?")
//     var addValue = 0 ;

//     for(var i = 0 ; i < times ; i++){
//         addValue  +=    +prompt("ENTER VALUES" + (i + 1))
//     }

//     console.log(addValue)

//     // var num1 = prompt("ENTER VALUE 1")
//     // var num2 = prompt("ENTER VALUE 2")

//     // alert( +num1   +   +num2)

// }

// function sub(){
//     var times = +prompt("How many value...?")
    
//     var addValue = +prompt("ENTER VALUES 1") ;

//     for(var i = 1 ; i < times  ; i++){
//         addValue  =   addValue  - +prompt("ENTER VALUES" + (i + 1))  
//     }
    
//     console.log(addValue)
//     // var num1 = prompt("ENTER VALUE 1")
//     // var num2 = prompt("ENTER VALUE 2")

//     // alert( num1   -   num2)

// }
// function mul(){

//     var num1 = prompt("ENTER VALUE 1")
//     var num2 = prompt("ENTER VALUE 2")

//     alert( num1   *   num2)

// }
// function div(){

//     var num1 = prompt("ENTER VALUE 1")
//     var num2 = prompt("ENTER VALUE 2")

//     alert( num1   /   num2)

// }




// function input1( ){
//     // console.log("run")
//         // console.log( element )

//     var input10 = document.getElementById("input10");
//     console.log(input10.value)

//     // input10.value = "JAFFAR AMAN"
//     // element.style.backgroundColor = "black"
//     // element.style.color = "white"

// }

// function input2( element ){

//     // console.log( element )

//     element.style.backgroundColor = "green"
//     element.style.color = "black"
//     element.disabled = true


// }



// <!-- //javascript calc/// -->


function getValue(value){
    var input = document.getElementById("input1")
    input.value += value
    // console.log(value)


} 
function results(){
    var input = document.getElementById("input1")
    var result = eval(input.value)
    console.log(result);
    input.value = result

}


function allClear(){
    var input = document.getElementById("input1")
    input.value = ""
}
function removeVal(){
    var input = document.getElementById("input1")
    
    // console.log(input.slice( 0 , -1 ))
    input.value = input.value.slice(0 , -1)

}