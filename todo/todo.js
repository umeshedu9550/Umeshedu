const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("no message has given");
    }
    else{
         let li = document.createtElement("li");
         li.innerHTML = inputBox.value;
         listContainer.appendChild(li);
         let span  = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
}
inputBox.value = "";

saveData();