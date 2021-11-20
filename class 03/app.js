// function greet(){
//     alert("HELLO CLASS...")
// }


function setValue(){

    var myInput = document.getElementById("myInput");
    // console.log(myInput)
    myInput.value = "Jaffar Aman" 


}


// function getValue(){

//     var myInput = document.getElementById("myInput");
   
//     // myInput.value = "Jaffar Aman" 
//     console.log(myInput.value)


// }


// function para(){

//     var para1 = document.getElementById("para1") 
//     console.log(para1.innerHTMl) 
//     para1.innerHTML = "Pakistan zindabad....."



// }





// var expandPara = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut nobis vitae culpa harum, a laboriosam hic eaque facere qui alias, velit, impedit optio repudiandae accusamus itaque? At minus similique esse et rem sed saepe, ad accusamus aspernatur pariatur quam accusantium ab, dolore ut repellat enim voluptates magni sint quidem! <a href='' >HIDE</a> "
// console.log(expandPara)
// function seeMore(){
//     var hideText = document.getElementById("hideText")
//     console.log(hideText)
//     var newPara = document.getElementById("newPara")
//     console.log(newPara)
//     newPara.innerHTML = hideText.innerHTML
// }



// function changeImg(btn){
//     var img = document.getElementById("carImg");

//     // console.log(btn.innerHTML)


//         if(btn.innerHTML  == "next image"){
//             img.src = "./images/car2.jpg"
//             btn.innerHTML = "prev Image"

//         }else if(btn.innerHTML  == "prev Image"){
//             img.src = "./images/car1.jpg"
//             btn.innerHTML = "next image"
            

//         }




// }



// function bulbOn(e){
//     console.log(e)
//     e.src = "./images/on.gif"
// }

// function bulbOff(e){
//     console.log("mouse")
//     e.src = "./images/off.gif"
// }

// function bulbToggler( id , element  ){
//         console.log(id , element)
//         if(id == 1){
//             element.src = "./images/on.gif"
//         }else{
//             element.src = "./images/off.gif"

//         }

// }


function bigImg(){
    var carImg = document.getElementById("carImg")
    // carImg.style.border = "1px solid red"
    console.log(carImg.className)
    
    carImg.className += " bigImg"


}