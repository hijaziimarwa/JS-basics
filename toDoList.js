let tasks=[]

function addTask(tasktext) {
    tasks.push({task:tasktext, completed:false})
    console.log(`Task added "${tasktext}".`)
    }

addTask('Complete homework')
addTask('Buy groceries')
