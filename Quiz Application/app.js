var quesArr = [
    {
      num: 1,
      question: "HTML stand for.....?",
      options: {
        a: "Hyper text markup Language",
        b: "Hyper text programming Language",
        c: "Hyper text styling Language",
        d: "Hyper text scripting Language",
      },
      correctAns: "Hyper text markup Language",
    },
    {
      num: 2,
      question: "Which type of JavaScript Languages is",
      options: {
        a: "Object-Oriented ",
        b: "Object-Base",
        c: "Assembly Languages",
        d: "high Level",
      },
      correctAns: "Object-Base",
    },
    {
      num: 3,
      question: "The 'function' and  'var' are known as:",
      options: {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
      },
      correctAns: "Declaration statements",
    },
    {
      num: 4,
      question: "who is the present president of pakistan",
      options: {
        a: "Arif Alvi",
        b: "Imran Khan",
        c: "Nawaz Sharif",
        d: "Zardari",
      },
      correctAns: "Arif Alvi",
    },
    {
      num: 5,
      question: "How many prayers in a day:",
      options: {
        a: "6",
        b: "5",
        c: "3",
        d: "none",
      },
      correctAns: "5",
    },
  ];





///get ques element
var uiQuestion = document.getElementById("question")

///get Option element
var Quizoption = document.getElementsByClassName("Quizoption")

var nextBtn = document.getElementById("nextBtn")

var mtotalQues = document.getElementById("totalQues")
var mcorrectAns = document.getElementById("correctAns")
var mwrongQues = document.getElementById("wrongQues")
var resultBox = document.getElementById("resultBox")
var mainBox = document.getElementsByClassName("mainBox")[0]
////set onclick event options
for(var i = 0 ; i < Quizoption.length ; i++){
    Quizoption[i].setAttribute("onclick" , "checkAnswer(this)")
}



var counter = 0
var Scorecounter = 0
var wrongCounter = 0

////onload function///
function startQuiz(){
    //set ques 
    
    uiQuestion.innerHTML = quesArr[counter].question

    ///set options
    Quizoption[0].innerHTML = quesArr[counter].options.a
    Quizoption[1].innerHTML = quesArr[counter].options.b
    Quizoption[2].innerHTML = quesArr[counter].options.c
    Quizoption[3].innerHTML = quesArr[counter].options.d

    nextBtn.style.display = "none"

}



function nextQues(){
    
  if( counter < quesArr.length -1){
    counter++
    startQuiz()

  }else{
    console.log("khatam....");
    resultBox.style.display = "block"
    mainBox.style.display = "none"
    mtotalQues.innerHTML = quesArr.length
    mcorrectAns.innerHTML = Scorecounter
    mwrongQues.innerHTML = wrongCounter


  }
    // console.log(quesArr.length)
      
    for(var i = 0 ; i<Quizoption.length ; i++){
      Quizoption[i].style.pointerEvents = "visible"
      Quizoption[i].style.backgroundColor = "transparent"

  }
}


function checkAnswer(li){
    
    if(li.innerHTML === quesArr[counter].correctAns){
        console.log("true ans")
        Scorecounter++
        console.log("Scorecounter" , Scorecounter);
        li.style.backgroundColor = "green"
      }else{
        wrongCounter++
      console.log("false");
      li.style.backgroundColor = "red"
      
    }
      
    for(var i = 0 ; i<Quizoption.length ; i++){
        Quizoption[i].style.pointerEvents = "none"
    }
    nextBtn.style.display = "block"

}



var min = document.getElementById("min")
var sec = document.getElementById("sec")


var minjs = 0
var secjs = 0
min.innerHTML = minjs

var interval = setInterval(function(){
    secjs++
    sec.innerHTML = secjs
      if(secjs ==5){
      minjs--

      min.innerHTML = minjs
    }
    if(minjs < 0){
        resultBox.style.display = "block"
        mainBox.style.display = "none"
        mtotalQues.innerHTML = quesArr.length
        mcorrectAns.innerHTML = Scorecounter
        mwrongQues.innerHTML = wrongCounter
    }



} , 1000)