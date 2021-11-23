// alert("HELLO CLASS....");



function getInp(){
    var input1 = document.getElementById("input1")
    console.log(input1.value)
}

// function setvalue(){
//     var input1 = document.getElementById("input1")
//     // input1.value = set()
//     // input1.value = input1
//     input1.value = "jaffar";
//     // console.log(input1) 
//     // input1.value = 

// }




    /////setInterval() OR setTimeOut()


// console.log(1) 


// console.log(2)    



// console.log(3)


// var counter = 0



// setInterval( function(){
//     document.write(++counter);
// } , 1000   )


// setTimeout(  function(){

//     console.log("3 sec")


// } , 3000);


// console.log(1)


// setTimeout(function(){
//     console.log(2)

// }, 2000);


// console.log(3)


// var interval10 =  setInterval(function(){
//     console.log("set interval")
// },  100);



// function stop(){
//     clearInterval(interval10)
    
// }

// setTimeout(function(){
//     console.log("settimeout")
// }, 10000)



    ////////STOP WATCH/////


var minPara = document.getElementById("min")
var secPara = document.getElementById("sec")
var msecPara = document.getElementById("msec")


var min = 0
var sec = 0
var msec = 0



var interval;




function timer(){
    msec++  
    msecPara.innerHTML = msec
    if(msec == 100){
        sec++
        secPara.innerHTML = sec
        msec = 0
    }else if(sec == 60){
        min++
        minPara.innerHTML = min
        sec = 0
    }
    

}



function start(){
    var startBtn =document.getElementById("startBtn")
    interval = setInterval( timer , 10 );
    startBtn.disabled = true

}

function stop(){
    var startBtn =document.getElementById("startBtn")

    clearInterval(interval)
    startBtn.disabled = false

}


function reset(){
    clearInterval(interval)
    msecPara.innerHTML = 0
    secPara.innerHTML = 0
    minPara.innerHTML = 0
    min=0
    sec=0
    msec=0

}



