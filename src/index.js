import "./style.css";
import loadpage from "./page-load";

loadpage();

let projectCounter = 0;
let projectList = JSON.parse(localStorage.getItem("projectList"));
let currentProject = projectList[0].id;

console.log(currentProject);


const loadProjectCounter =() => {
    projectCounter = localStorage.getItem("projectCounter");
    if (projectCounter === null) {
        projectCounter = 0;
    }
    else if (typeof(projectCounter) === "string") {
        projectCounter = +projectCounter;
    }
    return projectCounter;
}

loadProjectCounter();


class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.taskArray = 'tasks' + +projectCounter;
        projectCounter += 1;
        localStorage.setItem("projectCounter", projectCounter);
    }
}

/* let dummyProject1 = new Project(projectCounter, "Default Project");
let dummyProject2= new Project(projectCounter, "no, name me");
let dummyProject3 = new Project(projectCounter, "numero threeo");
console.log(dummyProject1);
console.log(dummyProject2); 

projectList = [dummyProject1, dummyProject2];
console.table(projectList);
projectList.push(dummyProject3);
console.table(projectList);
localStorage.setItem("projectList", JSON.stringify(projectList));  */

console.table(projectList);

class Task {
    constructor(projectID, task, description, dueDate, priority, complete) {
        this.projectID = projectID;
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }
        

}


// Array to store task objects
let allTasks = [];
allTasks = JSON.parse(localStorage.getItem("tasks"));
console.table(allTasks);

// Dummy tasks for testing
//myTasks.push(new Task("Eat", "Eat Lunch", "05/05/2023", "medium", false));
//myTasks.push(new Task("Run", "Get those legs working", "25/05/23", "high", false));
//let string = JSON.stringify(myTasks);
//localStorage.setItem("tasks", string);

const taskForm = document.getElementById("task-form");
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    allTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(e.target[0].value);
    let projectID = currentProject;
    let task = e.target[0].value;
    let description = e.target[1].value;
    let dueDate = e.target[2].value;
    let priority = e.target[3].value;
    let complete = false;
    allTasks.push(new Task(projectID, task, description, dueDate, priority, complete));
    console.table(allTasks);
    let string = JSON.stringify(allTasks);
    console.log(string);
    localStorage.setItem("tasks", string);
});

//storage lookup button for testing
const storageLookup = document.getElementById("storage-lookup");
storageLookup.addEventListener('click', () => {
    console.table(JSON.parse(localStorage.getItem("tasks")));
});

