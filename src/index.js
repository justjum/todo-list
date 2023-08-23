import "./style.css";
import loadpage from "./page-load";
import { updateTaskTable, updateProjectList } from "./page-load";
import { compareAsc, format, parseISO, addDays } from "date-fns";
import CircleOutline from "./Images/circle-outline.svg";
import CheckCircleOutline from "./Images/check-circle-outline.svg"


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
let sortThreeDays = false;
let sortWeek = false;
let sortPriority = false;
let daysToAdd = 10000;
let dateCutOff = 0;

const calcDateCut = () => {
    dateCutOff = addDays(new Date(), daysToAdd);
}

calcDateCut();
console.log(dateCutOff)

//update localstorage
const updateStorage = (array, storage) => {
    let string = JSON.stringify(array);
    localStorage.setItem(storage, string);
}

const loadProjectList = () => {
    projectList = JSON.parse(localStorage.getItem("projectList"));
    if (projectList.length === 0) {   
        projectList = [];
        updateStorage(projectList, "projectList");
    }
    else {
        return projectList;
    }
}

loadProjectList();
let currentProject = 0;
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


// add task pop-up form
const taskForm = document.getElementById("task-form");
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkStorage();
    
    let projectID = currentProject;
    let task = e.target[0].value;
    let description = e.target[1].value;
    let dueDate = e.target[2].value;
    let priority = e.target[3].value;
    let complete = false;
    allTasks.push(new Task(projectID, task, description, dueDate, priority, complete));
    updateStorage(allTasks, "tasks");
    updateTaskTable(allTasks, dateCutOff);
    updateTaskEvents();
    switchButton('task-form');
});

const removeTasks = (projectID) => {
    for (let x = 0; x < allTasks.length; x++) {
        if (allTasks[x].projectID === projectID) {
            let remove = allTasks.splice(x, 1);
            console.log(`${remove} is gone`);
            updateStorage(allTasks, "tasks");
            console.table(allTasks);
            updateTaskTable(allTasks);
        }
    }
}

const checkStorage = () => {
    if (localStorage.getItem("tasks") !== "undefined") {
        allTasks = JSON.parse(localStorage.getItem("tasks"));
        return;
    } 
};




//storage lookup button for testing
/* const storageLookup = document.getElementById("storage-lookup");
storageLookup.addEventListener('click', () => {
    console.table(JSON.parse(localStorage.getItem("tasks")));
}); */


//add event listener new project
const addProject = document.getElementById("add-project");
addProject.addEventListener('click', () => {
    let projectName = prompt('Project name:');
    projectList.push(new Project(projectCounter, projectName));
    console.table(projectList);
    updateStorage(projectList, "projectList");
    updateProjectList(projectList);
});

//add event listener select project



//delete project function
const updateProjectEvents = () => {
    const deleteProject = document.querySelectorAll(".delete-project");
    deleteProject.forEach(delProj => {
        delProj.addEventListener('click', (e) => {
            let projIndex = e.target.id.replace(/[^0-9]/g, "");
            let projectID = projectList[projIndex].id;
            removeTasks(projectID);
            let remove = projectList.splice(projIndex, 1);
            console.log(`${remove} is gone`);
            updateStorage(projectList, "projectList");
            updateProjectList(projectList);
        })
    })

    const selectProject = document.querySelectorAll(".project-check");
    const defaultCheck = document.getElementById("default-check")
    selectProject.forEach(selProj => {
        selProj.addEventListener('click', (e) => {
            let projIndex = e.target.id.replace(/[^0-9]/g, "");
            if (projIndex !== 0) {
                defaultCheck.setAttribute('src', `${CircleOutline}`)
            }
            else if (+projIndex === 0) {
                
            }
            currentProject = +projIndex;
            console.log(currentProject);
            updateProjectList(projectList);
            updateTaskTable(allTasks, dateCutOff, sortPriority);
        })
    })
};


const sortThree = () => {
    sortThreeDays = !sortThreeDays;
    sortWeek = false;
    switch(sortThreeDays) {
        case true: daysToAdd = 3; break;
        case false: daysToAdd = 10000; break;
    }
    calcDateCut();
}

const sortSeven = () => {
    sortWeek = !sortWeek;
    sortThreeDays = false;
    switch(sortWeek) {
        case true: daysToAdd = 7; break;
        case false: daysToAdd = 10000; break;
    }
    calcDateCut();
    
}

const sortHighPriority = () => {
    sortPriority = !sortPriority;
}

const updateSortIcons = () => {
    let checked = CheckCircleOutline;
    let unchecked = CircleOutline;
    sortThreeDays === true ? document.getElementById("sort-three").setAttribute("src", `${checked}`) : document.getElementById("sort-three").setAttribute("src", `${unchecked}`);
    sortWeek === true ? document.getElementById("sort-seven").setAttribute("src", `${checked}`) : document.getElementById("sort-seven").setAttribute("src", `${unchecked}`);
    sortPriority === true ? document.getElementById("sort-priority").setAttribute("src", `${checked}`) : document.getElementById("sort-priority").setAttribute("src", `${unchecked}`);
};

//add event listener sort tasks
const updateSortEvents = () => {
    const sortTask = document.querySelectorAll(".sort-tasks")
    sortTask.forEach(filter => {
        filter.addEventListener('click', (e) =>{
            console.log(e.target.id);
            switch(e.target.id) {
                case "sort-three": sortThree(); break;
                case "sort-seven": sortSeven(); break;
                case "sort-priority": sortHighPriority(); break;
            }
            updateSortIcons();
            updateTaskTable(allTasks, dateCutOff, sortPriority);
        });
    });
}


//add event listner add task
const addTask = () => {
    const addTaskButton = document.getElementById("add-task")
    
    addTaskButton.addEventListener('click', () => {
        switchButton("task-form");
    });
}


//add event listener delete task
const updateTaskEvents = () => {
    const selectTaskButton = document.querySelectorAll(".task-selection");
    selectTaskButton.forEach(selectTask => {
        selectTask.addEventListener('click', (e) => {
            console.log(e);
            let taskIndex = e.target.id.replace(/[^0-9]/g, "");
            console.log(taskIndex);
            switchButton(`task-select${taskIndex}`);
        })
    })

    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach(deleteTask => {
        deleteTask.addEventListener('click', (e) => {
            let taskIndex = e.target.id.replace(/[^0-9]/g, "");
            let remove = allTasks.splice(taskIndex, 1);
            console.log(`${remove} is gone`);
            updateStorage(allTasks, "tasks");
            console.table(allTasks);
            updateTaskTable(allTasks);
            e.stopPropagation();
        });
    });
};

// switch taskForm display
const switchButton = (switchButton) => {
    console.log(switchButton);
    const switchView = document.getElementById(switchButton);
    if (switchView.style.display === "grid") {
        switchView.style.display = "none";
    }
    else if (switchView.style.display === "none") {
        switchView.style.display = "grid";
    }
};

// function to sort tasks by date
const sortDate = () => {
    const taskTable = document.getElementById("task-table");
    let switching = true;
    let shouldSwitch = false;
    let x;
    let y;
    let i = 1;
    while (switching) {
        switching = false;
        let rows = taskTable.rows;
        for (i = 1; i < (rows.length-1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[2].innerHTML;
            y = rows[i+1].getElementsByTagName("td")[2].innerHTML;
            if (compareAsc(parseISO(x), parseISO(y)) === 1) {
                shouldSwitch = true;
                break;
            };

        };
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        };



    };

};


// function to filter tasks (by priority, three days, project, etc)


checkStorage();
console.table(projectList);
addTask();
updateProjectList(projectList);
updateTaskTable(allTasks);
updateSortEvents();

export {currentProject, projectList};
export {updateTaskEvents, updateProjectEvents, sortDate};