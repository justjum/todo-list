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
        projectCounter += 1;
        localStorage.setItem("projectCounter", projectCounter);
    }
}

class Task {
    constructor(projectID, task, description, dueDate, priority) {
        this.projectID = projectID;
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
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
let today = format(new Date(), "yyyy-MM-dd");
let newTask = true;
let editIndex = 0;

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

// Shortcut to reset task array
//updateStorage(allTasks, 'tasks');

const grayout = (displayType) => {
    const grayout = document.getElementById("grayout");
    console.log(grayout);
    grayout.setAttribute("style", `${displayType}`);
}

// add task pop-up form
const taskForm = document.getElementById("task-form");
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkStorage();

    let task = e.target[1].value;
    let description = e.target[2].value;
    let dueDate = e.target[3].value;
    let priority = e.target[4].value;
    let complete = false;
    if (newTask === true) {
        let projectID = currentProject;
        allTasks.push(new Task(projectID, task, description, dueDate, priority, complete));
    }
    else if (newTask === false) {
        allTasks[editIndex].projectID = +e.target[0].value;
        allTasks[editIndex].task = task;
        allTasks[editIndex].description = description;
        allTasks[editIndex].dueDate = dueDate;
        allTasks[editIndex].priority = priority;
        
        newTask = true;
    }
    updateStorage(allTasks, "tasks");
    updateTaskTable(allTasks, dateCutOff);
    updateTaskEvents();
    grayout('display: none');
    switchButton('task-form');


});


// add project pop-up form
const projectForm = document.getElementById("project-form");
projectForm.addEventListener("submit", (e) => {
    let projectName = e.target[0].value;
    console.log(projectName);
    currentProject = projectCounter;
    projectList.push(new Project(projectCounter, projectName));
    updateStorage(projectList, "projectList");
    updateProjectList(projectList);
    grayout();
})

// rename project pop-up form
const projectRename = (projIndex) => {
    const rename = document.getElementById(`project-new-name${projIndex}`)
    rename.setAttribute("style", "display: block");
    rename.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            let newName = rename.value;
            projectList[projIndex].name = newName;
            updateStorage(projectList, "projectList");
            updateProjectList(projectList);
        }

    })

};


const removeTasks = (projectID) => {
    for (let x = 0; x < allTasks.length; x++) {
        console.log(x);
        if (allTasks[x].projectID === projectID) {
            let remove = allTasks.splice(x, 1);
            console.log(x);
            x -= 1;
        }
    }
    currentProject = 0;
    updateStorage(allTasks, "tasks");
    console.table(allTasks);
    updateTaskTable(allTasks);
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
    grayout();
    switchButton("project-form");
});





//delete project function
function updateProjectEvents() {

    const selectProject = document.querySelectorAll(".project-check");
    const defaultCheck = document.getElementById("default-check");
    selectProject.forEach(selProj => {
        selProj.addEventListener('click', (e) => {
            let projID = e.currentTarget.id.replace(/[^0-9]/g, "");
            let projIndex = e.currentTarget.className.replace(/[^0-9]/g, "");
            console.log(e.currentTarget.className);
            if (+projID === 0) {
                updateTaskHeading("All Tasks");
            }
            else {
                defaultCheck.setAttribute('src', `${CircleOutline}`);
                updateTaskHeading(projectList[projIndex].name)
            }

            currentProject = +projID;
            updateProjectList(projectList);
            updateTaskTable(allTasks, dateCutOff, sortPriority);
        });
    });

    const renameProject = document.querySelectorAll(".rename-project");
    renameProject.forEach(renameProj => {
        renameProj.addEventListener('click', (e) => {
            let projIndex = e.currentTarget.id.replace(/[^0-9]/g, "");
            let projectID = projectList[projIndex].id;
            projectRename(projIndex, projectID);
        });
    });

    const deleteProject = document.querySelectorAll(".delete-project");
    deleteProject.forEach(delProj => {
        delProj.addEventListener('click', (e) => {
            let projIndex = e.currentTarget.id.replace(/[^0-9]/g, "");
            let projectID = projectList[projIndex].id;
            removeTasks(projectID);
            projectList.splice(projIndex, 1);
            updateStorage(projectList, "projectList");
            updateProjectList(projectList);
        });
    });

}



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

const updateTaskFormFields = (projectID, task, description, dueDate, priority) => {
    const taskField = document.querySelector(".task-form")
    console.log(taskField.elements);
    let priorityIndex = 2;
    switch(priority) {
        case "high": priorityIndex = 0; break;
        case "medium": priorityIndex = 1; break;
        case "low": priorityIndex = 2; break;
    }
    taskField.elements[0].setAttribute("value", projectID);
    taskField.elements[1].setAttribute("value", task);
    taskField.elements[2].setAttribute("value", description);
    taskField.elements[3].setAttribute("value", dueDate);
    taskField.elements[4][priorityIndex].setAttribute("selected", true);
};

//add event listner add task
function addTask() {
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener('click', () => {
        updateTaskFormFields(currentProject, "", "", today, "low");
        grayout('display: inline');
        switchButton("task-form");
    });
}

const updateTaskHeading = (heading) => {
    let taskHeading = document.getElementById("task-heading");
    taskHeading.innerText = heading;

};



//add event listener delete task
const updateTaskEvents = () => {
    const completeTask = document.querySelectorAll(".complete-button");
    completeTask.forEach(finishedTask => {
        finishedTask.addEventListener('click', (e) => {
            let taskIndex = e.target.id.replace(/[^0-9]/g, "");
            allTasks[taskIndex].complete = !allTasks[taskIndex].complete;
            updateStorage(allTasks, "tasks");
            updateTaskTable(allTasks);
            //finishedTask.setAttribute("src", `${CheckCircleOutline}`)
        })
    })

    const editTask = document.querySelectorAll(".edit-button");
    editTask.forEach(edit => {
        edit.addEventListener('click', (e) => {
            let taskIndex = e.currentTarget.id.replace(/[^0-9]/g, "");
            updateTaskFormFields(allTasks[taskIndex].projectID, allTasks[taskIndex].task, allTasks[taskIndex].description, allTasks[taskIndex].dueDate, allTasks[taskIndex].priority)
            editIndex = taskIndex;
            newTask = false;
            grayout('display: inline');
            switchButton("task-form");
        })
    });

    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach(deleteTask => {
        deleteTask.addEventListener('click', (e) => {
            let taskIndex = e.currentTarget.id.replace(/[^0-9]/g, "");
            let remove = allTasks.splice(taskIndex, 1);
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
    const taskList = document.getElementById("task-list");
    let switching = true;
    let shouldSwitch = false;
    let x;
    let y;
    let i = 1;
    while (switching) {
        switching = false;
        console.log("Switching")
        let cards = taskList.childNodes;
        for (i = 0; i < (cards.length-1); i++) {
            shouldSwitch = false;
            x = cards[i].childNodes[1].childNodes[4].innerText;
            y = cards[i+1].childNodes[1].childNodes[4].innerText;
            if (compareAsc(parseISO(x), parseISO(y)) === 1) {
                shouldSwitch = true;
                break;
            };

        };
        if (shouldSwitch) {
            console.log("switch");
            cards[i].parentNode.insertBefore(cards[i+1], cards[i]);
            switching = true;
        };



    };

};


// function to filter tasks (by priority, three days, project, etc)


checkStorage();
addTask();
console.table(projectList);
console.table(allTasks)
updateProjectList(projectList);
updateTaskTable(allTasks);
updateSortEvents();

export {currentProject, projectList, today};
export {updateTaskEvents, updateProjectEvents, sortDate};