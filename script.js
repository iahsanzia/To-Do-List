const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTask();

function addTask(event){
    event.preventDefault();
    const task = taskInput.value.trim();

    if(task){
            createList(task);
            taskInput.value = '';
            saveTask();
    }

    else{
        alert("Please Enter a task to add");
    }
}
addButton.addEventListener('click',addTask);

function createList(task){
    const listItems = document.createElement('li');
    listItems.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';

    listItems.appendChild(deleteButton);
    taskList.appendChild(listItems);

    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItems);
        saveTask();
    })
}

function saveTask(){
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('Delete','').trim());
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTask(){
    const task = JSON.parse(localStorage.getItem('tasks')) || [];

    task.forEach(createList);
}
