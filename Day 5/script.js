// Class for every task
class Task{
    constructor(taskName) {
        this.taskName = taskName;
        this.status = false;
        this.id = taskName.replace(/ /g, "");
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


// Text Field and Add Button
addTask.addEventListener("click", (event) => {
    const task = new Task(taskInput.value);

    // Task row holder
    const taskRow = document.createElement("tr");
    taskRow.id = "tr-" + task.id;

    // Cell elements
    const taskName = document.createElement("td");
    taskName.innerHTML = task.getTaskName();
    taskRow.append(taskName);

    const status = document.createElement("td");
    status.id = "s-" + task.id;
    status.innerHTML = "Incomplete";
    taskRow.append(status);

    const actions = document.createElement("td");

    const cmpBtn = document.createElement("button");
    cmpBtn.id = "cb-" + task.id;
    cmpBtn.innerHTML = "Complete";
    actions.append(cmpBtn);

    cmpBtn.addEventListener("click", (event)=> {
        // const status = document.getElementById("status");
        // status.classlist.add();
        status.innerHTML = "Completed";
    });

    const delBtn = document.createElement("button");
    delBtn.id = "db-" + task.id;
    delBtn.classList.add("bg-dark");
    delBtn.classList.add("text-light");
    delBtn.innerHTML = "Delete";
    actions.append(delBtn);

    delBtn.addEventListener("click", (event) => {
        // const task = document.find
        taskRow.remove();
        return;
    });
    

    taskRow.append(actions);
    table.append(taskRow);
});
