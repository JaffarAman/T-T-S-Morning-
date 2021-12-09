// alert("HELLO CLASS.....")

// var obj = {
//     name : "Jaffar",
//     age : 20
// }

// var check  = "age" in obj
// var check = obj.hasOwnProperty("age")
// console.log(check);
// delete obj.age
// console.log(obj);

// var obj = {};

// obj.name = "Jaffar"

// console.log(obj);

// var std = {
//         stdName : "Jaffar",
//         stdAge : 20,
//         isOnline : true,
//         result : undefined,
//         subjects :["html" , "css" , "javascript"]
// }

// console.log(std.stdName)
// console.log(std.subjects[0])
// console.log(std.subjects[1])
// console.log(std.subjects[2])

// var arr = [
//   {
//     stdName : "Jaffar",
//     stdAge : 20,
//     isOnline :  true,
//   },
//   {
//     stdName: "Aman",
//     stdAge: 19,
//     isOnline: true,
//   },
//   {
//     stdName: "Ahmed",
//     stdAge: 22,
//     isOnline: true,
//   },
//   {
//     stdName: "Bilal",
//     stdAge: 23,
//     isOnline: false,
//   },
// ];

// console.log(arr)

////methods////

// var std = {
//         stdName : "Jaffar",
//         stdAge : 20,
//         isOnline : true,
//         result : undefined,
//         subjects :["html" , "css" , "javascript"],
//         marks : [80 , 75 , "65"],
//         getObtMarks : function(){
//             var obtMarks = this.marks[0] + this.marks[1] +
//                 +this.marks[2]
//             return  obtMarks
//         }

// }

// console.log(std.getObtMarks())

// function Std(stdName, stdAge, isOnline, result, Marks) {
//   this.stdName = stdName;
//   this.stdAge = stdAge;
//   this.isOnline = isOnline;
//   this.result = result;
//   this.Marks = Marks;
//   this.getObtMarks = function(){
//         var obt = this.Marks[0] + this.Marks[1] + this.Marks[2]
//     return obt
//   }
// }

// var std1 = new Std("jaffar" , 20 , true , undefined , [50,60,80])
// var std2 = new Std("ahmed" , 22 , false , undefined , [60,85,75])
// var std3 = new Std("bilal" , 23 , true , undefined , [40,60,95])

// // delete std1.result
// console.log(std1)
// std1.className = "Web and mobile"
// console.log(std2.getObtMarks())
// console.log(std3.getObtMarks())

///get table
// var myTable = document.getElementById("myTable");

// var length = +prompt("How many entries?")
// var stdId ; 
// var stdName ;
// var stdClass ;
// var stdSection ;
// var tr = ""
// for(var i = 0 ; i < length ; i++ ){
    
//     stdId = prompt("Enter Studend Id:" + (i+ 1));
//     stdName = prompt("Enter Studend Name:" + (i+ 1));
//     stdClass = prompt("Enter Studend Class:" + (i+ 1));
//     stdSection = prompt("Enter Studend Section:" + (i+ 1));
//     var std1 = {
//       s_no: 1,
//       stdId: stdId,
//       stdName: stdName,
//       stdClass: stdClass,
//       stdSection: stdSection,
//     };

//      tr = "<tr>" + 
//     "<td>" + (i + 1) + "</td>" +
//     // "<td>" + std1.s_no + "</td>" +
//     "<td>" + std1.stdId + "</td>" + 
//     "<td>" + std1.stdName + "</td>" +
//     "<td>" + std1.stdClass + "</td>" +
//     "<td>" + std1.stdSection + "</td>" 
//     +"</tr>"
//     myTable.innerHTML += tr
// }




// for()



// var tr = `<tr>
// <td>1</td>
// <td>${std1.stdId}</td>
// <td>${std1.stdName}</td>
// <td>${std1.stdClass}</td>
// <td>${std1.stdSection}</td>
// </tr>`;



// console.log(tr);
// myTable.innerHTML +=  tr




// window.location.href
// window.location.pathname
// window.location.hostname
// window.location.hash



function pageChange() {
        
    // window.location.href = "https://www.google.com"
        // window.location.assign("https://www.google.com")    
        // window.location.replace("https://www.google.com")    
        // window.location.reload(true)
        window.open("./about.html" , "winName" , "width:500 , height:200" )

    
    }