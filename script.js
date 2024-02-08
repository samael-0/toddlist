const inputBox = document.getElementById("input-box");
const listsContainer = document.getElementById("lists-container");



showTask();
function addTask(){
    if(inputBox.value === ''){
        alert("Please write something in the box to add");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listsContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputBox.value="";
    saveData();
}


listsContainer.addEventListener("click",function(e){
    if(
        e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }},false);
        saveData();


function saveData(){
    localStorage.setItem("data",listsContainer.innerHTML);
}

function showTask() {
    listsContainer.innerHTML = localStorage.getItem("data");}





