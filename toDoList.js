//i added an Add task button in htmk and want to functionality to add a task to the list

const taskInput = document.querySelector('.taskInput')
const addTaskButton = document.querySelector('.addTaskBtn')
const taskList = document.querySelector('.taskList')



addTaskButton.addEventListener('click', function() {
    const task = taskInput.value;
    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);
    console.log(`Task added: ${task}`);


})




















// let tasks=[]

// function addTask(tasktext) {
//     tasks.push({task:tasktext, completed:false})
//     console.log(`Task added "${tasktext}".`)
//     }

// addTask('Complete homework')
// addTask('Buy groceries')
