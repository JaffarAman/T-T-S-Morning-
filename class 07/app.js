var listBox = document.getElementById("listBox");

function addTodo() {
  var input = document.getElementById("input");
  console.log(input.value.length)

    if(input.value.length > 3){
        console.log("correct ")
        var li = document.createElement("li");
        var liTxt = document.createTextNode(input.value);
        // li.innerHTML = input.value
        li.appendChild(liTxt);
        console.log(li);
      
        ////create DELETE BTN////
        var delBtn = document.createElement("button");
        var delBtnTxt = document.createTextNode("DELETE");
        delBtn.appendChild(delBtnTxt);
        delBtn.setAttribute("onclick", "delList(this)");
        console.log(delBtn);
      
        ////create EDIT BTN////
        var editBtn = document.createElement("button");
        var editBtnTxt = document.createTextNode("EDIT");
        editBtn.appendChild(editBtnTxt);
        editBtn.setAttribute("onclick", "editList(this)");
        console.log(editBtn);
      
        li.appendChild(editBtn);
        li.appendChild(delBtn);
      
        listBox.appendChild(li);
        input.value = "";
    }else{
        alert("enter input correct value")
    }


  ////CREATE li///
 
}

function delAll() {
  listBox.innerHTML = "";
}

function delList(e) {
  // console.log(e.parentNode)
  e.parentNode.remove();
}

function editList(e) {
  // console.log(e.parentNode.childNodes[0].nodeValue)
  var editValue = prompt("ENTER EDIT VALUE", e.parentNode.firstChild.nodeValue  );
  console.log(editValue);
  e.parentNode.firstChild.nodeValue = editValue;
}



// var i = document.createElement("i")
// i.className = "fas fa-trash"