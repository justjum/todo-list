import "./style.css";
import loadpage from "./page-load";
import { updateTaskTable, updateProjectList } from "./page-load";



class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.taskArray = 'tasks' + +projectCounter;
        projectCounter += 1;
        localStorage.setItem("projectCounter", projectCounter);
    }
}



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



//global variables
let projectList = [];
let projectCounter = 0;
let currentProject = 0;

//update localstorage
const updateStorage = (array, storage) => {
    let string = JSON.stringify(array);
    localStorage.setItem(storage, string);
}

const loadProjectList = () => {
    projectList = JSON.parse(localStorage.getItem("projectList"));
    if (projectList === null) {   
        console.log('this');
        projectList = [new Project(1, 'Default Project')];
        updateStorage(projectList, "projectList");
    }
    else {
        
        return projectList;
    }
}

loadpage();

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
loadProjectList();




// Array to store task objects
let allTasks = [];

console.table(allTasks);

const taskForm = document.getElementById("task-form");
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkStorage();
    
    console.log(e.target[0].value);
    let projectID = currentProject;
    let task = e.target[0].value;
    let description = e.target[1].value;
    let dueDate = e.target[2].value;
    let priority = e.target[3].value;
    let complete = false;
    allTasks.push(new Task(projectID, task, description, dueDate, priority, complete));
    updateStorage(allTasks, "tasks");
    updateTaskTable(allTasks);
    updateTaskEventListeners();
});

const checkStorage = () => {
    if (localStorage.getItem("tasks") !== "undefined") {
        allTasks = JSON.parse(localStorage.getItem("tasks"));
        return;
    } 
};



//storage lookup button for testing
const storageLookup = document.getElementById("storage-lookup");
storageLookup.addEventListener('click', () => {
    console.table(JSON.parse(localStorage.getItem("tasks")));
});


//edit task function


//add event listener new project
const addProject = document.getElementById("add-project");
addProject.addEventListener('click', () => {
    let projectName = prompt('Project name:');
    projectList.push(new Project(projectCounter, projectName));
    console.table(projectList);
    updateStorage(projectList, "projectList");
    updateProjectList();
});

//delete project function
const updateProjectEvents = () => {
    const deleteProject = () => {

    }
};


//edit project function

//add event listener delete task
const updateTaskEvents = () => {
    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach(deleteTask => {
        deleteTask.addEventListener('click', (e) => {
            let taskIndex = e.target.id.replace(/[^0-9]/g, "");
            let remove = allTasks.splice(taskIndex, 1);
            console.log(`${remove} is gone`);
            updateStorage(allTasks, "tasks");
            updateTaskTable(allTasks);
            e.stopPropagation();
        });
    });
};



checkStorage();
updateTaskTable(allTasks);
updateProjectList();


export {currentProject, projectList};
export {updateTaskEvents, updateProjectEvents};