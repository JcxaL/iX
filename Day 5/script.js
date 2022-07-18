class Task{
    constructor(taskName) {
        this.taskName = taskName;
        this.status = false;
    }
    getTaskName(){
        return this.taskName;
    }
}

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const table = document.getElementById("tBody");

const taskCheckBox = document.createElement("div");
const box = document.getElementById("sampleCheckBox");

let deleteButton; // to be init

addTask.addEventListener("click", (event) => {
    const task = new Task(taskInput.value);

    const taskRow = document.createElement("tr");
    taskRow.id = "tr"

    const taskName = document.createElement("td");
    taskName.innerHTML = task.getTaskName();
    taskRow.append(taskName);

    const status = document.createElement("td");
    //complete checkbox
    status.append(box);
    taskRow.append(status);

    const actions = document.createElement("td");
    //delete button
    taskRow.append(actions);

    table.append(taskRow);
    console.log(taskRow);

});

deleteButton.addEventListener("click", (event) => {
    //delete tableRow element on click

});
