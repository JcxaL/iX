// Class for every task
class Task{
    constructor(taskName) {
        this.taskName = taskName;
        this.status = false;
    }
    getTaskName(){
        return this.taskName;
    }
    complete(){
        this.status = true;
        return;
    }
    incomplete(){
        this.status = false;
        return;
    }
}

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const table = document.getElementById("tBody");

const taskCheckBox = document.createElement("div");
const box = document.getElementById("sampleCheckBox");

// Actions pane 2 buttons: Complete/Incomplete & Delete 
const completeBtn = document.getElementById("cmpBtn");
const deleteBtn = document.getElementById("delBtn");

// Text Field and Add Button
addTask.addEventListener("click", (event) => {
    const task = new Task(taskInput.value);

    // Task row holder
    const taskRow = document.createElement("tr");
    taskRow.id = taskInput.value;

    // Cell elements
    const taskName = document.createElement("td");
    taskName.innerHTML = task.getTaskName();
    taskRow.append(taskName);

    const status = document.createElement("td");
    status.id = "status";
    status.innerHTML = "";
    taskRow.append(status);

    const actions = document.createElement("td");
    //delete button
    taskRow.append(actions);

    table.append(taskRow);
    console.log(taskRow);

});

// actions column
completeButton.addEventListener("click", (event)=> {
    const status = document.getElementById("status");
    status.classlist.add();
    status.innerHTML = "Completed";
});
                                
deleteButton.addEventListener("click", (event) => {
    // const task = document.find
    table.remove("task");
});
