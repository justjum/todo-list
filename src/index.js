import "./style.css";
import loadpage from "./page-load";

loadpage();

class Task {
    constructor(task, description, dueDate, priority, complete) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }
        

}


// Array to store task objects
const myTasks = [];
console.log(myTasks);

// Dummy tasks for testing
myTasks.push(new Task("Eat", "Eat Lunch", "05/05/2023", "medium", false));
myTasks.push(new Task("Run", "Get those legs working", "25/05/23", "high", false));
console.log(myTasks[1].task);
console.log(myTasks[0].priority);

localStorage.setItem("tasks", myTasks);

let addTask = () => {
    
}

const taskForm = document.getElementById("task-form");
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let task = e.target[0].value;
    let description = e.target[1].value;
    let dueDate = e.target[2].value;
    let priority = e.target[3].value;
    let complete = false;
    myTasks.push(new Task(task, description, dueDate, priority, complete));
    console.table(myTasks);
    let string = JSON.stringify(myTasks);
    console.log(string);
    localStorage.setItem("tasks", string);
});

const storageLookup = document.getElementById("storage-lookup");
storageLookup.addEventListener('click', () => {
    console.table(localStorage.getItem("tasks"));
});

