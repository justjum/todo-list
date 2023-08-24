//import updateProjectList from functionalDOM.js;
import { updateTaskEvents, updateProjectEvents, projectList, currentProject, sortDate, dateCutOff, today } from "./index";
import CheckCircleOutline from "./Images/check-circle-outline.svg"
import CircleEditOutline from "./Images/circle-edit-outline.svg"
import CircleOutline from "./Images/circle-outline.svg"
import DeleteCircleOutline from "./Images/delete-circle-outline.svg"
import DotsVertical from "./Images/dots-vertical.svg"
import PlusCircleOutline from "./Images/plus-circle-outline.svg";
import ExpandTask from "./Images/magnify-expand.svg"
import { compareAsc, format, parseISO } from "date-fns";

export default function loadpage() {
     buildLayout();  
     buildSidebar(); 
     buildContainer();
}

export {updateTaskTable, updateProjectList}

const buildLayout = () => {
    const content = document.getElementById("content");
    const sidebar = document.createElement("div");
    const container = document.createElement("div");

    sidebar.setAttribute("class", "sidebar");
    sidebar.setAttribute("id", "sidebar");
    container.setAttribute("class", "container");
    container.setAttribute("id", "container");

    content.appendChild(sidebar);
    content.appendChild(container);
}

const buildSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const sortOptions = document.createElement("div");
    sortOptions.setAttribute("class", "sort-options")
    sortOptions.innerHTML = `
        <h2>Sorting</h2>
        <div class="sort-tasks"><img src="${CircleOutline}" id="sort-three"><h3>Upcoming 3 Days</h3></div>
        <div class="sort-tasks"><img src="${CircleOutline}" id="sort-seven"><h3>Upcoming Week</h3></div>
        <div class="sort-tasks"><img src="${CircleOutline}" id="sort-priority"><h3>High Priority</h3></div>`
    const projOptions = document.createElement("div");
    projOptions.setAttribute("class", "project-options")
    const projectHeading = document.createElement("h2");
    projectHeading.setAttribute("class", "project-heading");
    projectHeading.setAttribute("id", "project-heading");
    projectHeading.innerHTML = "Projects";
    const defaultProject = document.createElement('div');
    defaultProject.setAttribute("class", "project-check default");
    defaultProject.setAttribute("id", "project-check0");
    defaultProject.innerHTML = `
        <img src="${CheckCircleOutline}" id="default-check"> <h3>All Tasks</h3>`;
    const addProject = document.createElement("div");
    addProject.setAttribute('class', 'add-project');
    addProject.setAttribute('id', 'add-project');
    addProject.innerHTML = `
        <div class="add-card project"><img src="${PlusCircleOutline}"><h3>Add Project</h3></div>
        `;
    const projectList = document.createElement("div");
    projectList.setAttribute("class", "project-list");
    projectList.setAttribute("id", "project-list");
    sidebar.appendChild(sortOptions);
    projOptions.appendChild(projectHeading);
    projOptions.appendChild(defaultProject);
    projOptions.appendChild(projectList);
    sidebar.appendChild(projOptions);    
    sidebar.appendChild(addProject);
}

//move this to a "functionality" page rather than build
const updateProjectList = (projectList) => {
    if (currentProject === 0) {
        const defaultCheck = document.getElementById("default-check");
        defaultCheck.setAttribute('src', `${CheckCircleOutline}`);
    }
    const projects = document.getElementById("project-list");
    while (projects.hasChildNodes()) {
        projects.removeChild(projects.firstChild);
    }
    if (projectList.length === 0) {
        return;
    }
    const renderProjects = document.createElement('ul');
    renderProjects.setAttribute("class", "render-projects");  
    projectList.forEach((project, x) => {
        let li = document.createElement('li');
        if (project.id === currentProject) {
            li.innerHTML = `
            <img class="project-check active ${x}" id="project-check${project.id}" src=${CheckCircleOutline}></img>
            <div><h4>${project.name}</h4><input type="text" class="project-new-name" id="project-new-name${x}" style="display:none"></div>
            <div class="rename-project" id="rename-project${x}"><img src="${CircleEditOutline}"></div>
            <div class="delete-project" id="delete-project${x}"><img src="${DeleteCircleOutline}"></div>`;
        }
        else {
            li.innerHTML = `
            <img class="project-check inactive ${x}" id="project-check${project.id}" src=${CircleOutline}>
            <div><h4>${project.name}</h4><input type="text" class="project-new-name" id="project-new-name${x}" style="display:none"></div>
            <div class="rename-project" id="rename-project${x}"><img src="${CircleEditOutline}"></div>
            <div class="delete-project" id="delete-project${x}"><img src="${DeleteCircleOutline}"></div>`;
        }
        renderProjects.appendChild(li);
    });
    projects.appendChild(renderProjects);
    updateProjectEvents();
}

const buildContainer = () => {
    buildProjectForm();
    buildTaskForm();
    buildTaskList();
     
}

const buildTaskForm = () => {
    const container = document.getElementById("container");
    const taskForm = document.createElement('form');
    taskForm.setAttribute("id", "task-form");
    taskForm.setAttribute("name", "task-form")
    taskForm.setAttribute("class", "task-form");
    taskForm.style.display = "none";
    //taskForm elements below: task, description, due-date, priority, ("completed" not neccessary for entry)
    taskForm.innerHTML = `
    <input id="projectID" hidden></input>
    <label for="task">Task</label><input id="task"></input>
    <label for="description">Description</label><input id="description"></input>
    <label for="due-date">Due Date</label><input type="date" id="due-date" value="${today}"></input>
    <label for="priority">Priority</label><select id="priority" name="priority"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>
    <button type="submit" for="task-form">Save Task</button>`;

    container.appendChild(taskForm);
}

const buildProjectForm = () => {
    const container = document.getElementById("container");
    const projectForm = document.createElement('form');
    projectForm.setAttribute("id", "project-form");
    projectForm.setAttribute("name", "project-form")
    projectForm.setAttribute("class", "project-form");
    projectForm.style.display = "none";
    projectForm.innerHTML = `
        <label for="project">New project name:</label><input id="project"></input> 
        <button type="submit" for="task-form">Save Project</button>`;
    container.appendChild(projectForm);
}

const buildTaskList = () => {
    const container = document.getElementById("container");
    const taskHeading = document.createElement("h1");
    taskHeading.setAttribute("class", "task-heading");
    taskHeading.setAttribute("id", "task-heading");
    taskHeading.innerText = "All Tasks";
    const addTask = document.createElement("div");
    const taskList = document.createElement("div");
    taskList.setAttribute("class", "task-list");
    taskList.setAttribute("id", "task-list");
    addTask.setAttribute("id", "add-task");
    addTask.innerHTML = `
        <div class="add-card task"><img src="${PlusCircleOutline}"><h3>Add Task</h3></div>
        `;
    container.appendChild(taskHeading);
    container.appendChild(taskList);
    container.appendChild(addTask);
    
}

const updateTaskTable = (allTasks, dateCutOff, sortPriority) => {
    const taskList = document.getElementById("task-list");
    while (taskList.hasChildNodes()) {  
        taskList.removeChild(taskList.firstChild);
    };  
    for (let x = 0; x < allTasks.length; x++) {
        if (currentProject === allTasks[x].projectID  || currentProject === 0) {
            const taskCard = document.createElement("div");
            let date = format(parseISO(allTasks[x].dueDate), "yyyy-MM-dd");
            let complete = `<img src="${CircleOutline}" class="complete-button" id="complete-button${x}">`;
            switch (allTasks[x].complete) {
                case true: 
                complete = `<img src="${CheckCircleOutline}" class="complete-button active" id="complete-button${x}">`; 
                break;
                //case false: complete = `<img src="${CircleOutline}"`; break;
            }

            if (compareAsc(parseISO(allTasks[x].dueDate), dateCutOff) === 1) {
                
            }
            else if (sortPriority === true && allTasks[x].priority !== "high") {

            }
            else {
                taskCard.setAttribute("class", `card ${allTasks[x].priority}`);
                taskCard.innerHTML = `
                <div class="task-card-left">${complete}<h3 class="task-title">${allTasks[x].task}</h3><h4>${allTasks[x].description}<h4><h3 class="task-due">${date}</h3></div> 
                <div class="task-card-right"><div class="edit-button" id="edit${x}"><img src=${CircleEditOutline}></div><div class="delete-button" id="delete${x}"><img src=${DeleteCircleOutline}></div></div>
                `;
            taskList.appendChild(taskCard);
            }

        }
        sortDate();
        
    };
    updateTaskEvents();

    
};