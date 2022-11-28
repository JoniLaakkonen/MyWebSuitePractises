const tasklist = document.getElementById('taskList');//Ul from docu
const input = document.getElementById('field_addTask');

window.onload =()=> {getTasksfromLS()}
document.getElementById('btn_addTask').onclick = function() {addTask()};

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn_addTask").click();
  }
});

function addTask() {
    const taskField = document.getElementById('field_addTask').value;//user inputs
    let regExp  = /[a-zA-Z]/g;//regExp
    if(regExp.test(taskField)){
        let localStor = window.localStorage.getItem("New TODO");// =>localStorage
    
        if(localStor == null){
            list = [];//empty array
        }
        else{
            list = JSON.parse(localStor)//JSON => js
        }
        list.push(taskField);//push user inputs
        localStorage.setItem("New TODO", JSON.stringify(list));//js => JSON string
        getTasksfromLS();
        }
    else {
        alert("Input field is empty. Please add task name");
        return 0;
    }
    
}
function getTasksfromLS(){
    let localStor = localStorage.getItem("New TODO");// =>localStorage
    if(localStor == null){
        listItems = [];// =>empty array
    }
    else{
        listItems = JSON.parse(localStor)//JSON => js
    }
    let LiTagi = "";
    listItems.forEach((element, index)=> {//Looping trough listItems array 
        LiTagi += `<li>${element}<span><button><i class="fa-solid fa-palette"></i></button><button id="deletebtn" onclick="removeTask(${index})"><i class="fa-solid fa-trash"></i></button></span></li>`;
    });
    tasklist.innerHTML = LiTagi;
}


function removeTask(index){
    let localStor = localStorage.getItem("New TODO");// =>localStorage
    listItems = JSON.parse(localStor)//JSON => js
    listItems.splice(index, 1);

    localStorage.setItem("New TODO", JSON.stringify(listItems));//js => JSON string
    getTasksfromLS();
}

function customizeTask(index){
    let localStor = localStorage.getItem("New TODO");// =>localStorage
    listItems = JSON.parse(localStor)//JSON => js
    localStorage.setItem("New TODO", JSON.stringify(listItems));//js => JSON string
    getTasksfromLS();
}