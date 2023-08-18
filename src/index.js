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

localStorage.setItem("My Tasks", myTasks);

let addTask = () => {
    
}

