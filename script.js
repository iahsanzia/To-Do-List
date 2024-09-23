const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(event){
    event.preventDefault();
    const task = taskInput.value.trim();

    if(task){
            createList(task);
            taskInput.value = '';
    }

    else{
        alert("Please Enter a task to add");
    }
}
addButton.addEventListener('click',addTask);

function createList(task){
    const listItems = document.createElement('li');
    listItems.textContent = task;
    taskList.appendChild(listItems);
    console.log('Task added: ', task)
}