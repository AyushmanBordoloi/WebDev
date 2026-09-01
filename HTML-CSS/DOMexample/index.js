let todoIndex = 1;

function addTodo(){
    //write the code that reads the contents of the input box
    //creates a new input to the html dom
    //clears the input box
    let element = document.getElementById("todoInput");
    const todo = element.value;
    if (todo === ""){
        return;
    }
    element.value = "";

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo"+todoIndex)

    const newSpan = document.createElement("span");
    newSpan.innerHTML = todo;
    newDiv.appendChild(newSpan);

    const newButton = document.createElement("button");
    newButton.innerHTML = "Delete";
    newDiv.appendChild(newButton);
    newButton.setAttribute("onclick", "deleteTodo("+todoIndex+")");

    const parentDiv = document.getElementById("todoList");
    parentDiv.appendChild(newDiv);

    todoIndex++;
}

function deleteTodo(index){
    // alert("Delete todo called with " + index);
    const divElement = document.getElementById("todo"+index);
    divElement.parentElement.removeChild(divElement);
}