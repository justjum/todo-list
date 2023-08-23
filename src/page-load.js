//import updateProjectList from functionalDOM.js;
import { updateTaskEvents, updateProjectEvents, projectList, currentProject, sortDate, dateCutOff } from "./index";
import CheckCircleOutline from "./Images/check-circle-outline.svg"
import CircleEditOutline from "./Images/circle-edit-outline.svg"
import CircleOutline from "./Images/circle-outline.svg"
import DeleteCircleOutline from "./Images/delete-circle-outline.svg"
import DotsVertical from "./Images/dots-vertical.svg"
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
        <div class="sort-tasks"><img src="${CircleOutline}" id="sort-three"></div><h3>Upcoming 3 Days</h3>
        <div class="sort-tasks"><img src="${CircleOutline}" id="sort-seven"></div><h3>Upcoming Week</h3>
        <div class="sort-tasks"><img src="${CircleOutline}" id="sort-priority"></div><h3>High Priority</h3>`
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
    const projectAdd = document.createElement('div');
    projectAdd.setAttribute("class", "project-add");
    projectAdd.setAttribute("id", "project-add");
    const addButton = document.createElement("div");
    addButton.setAttribute('class', 'add-project');
    addButton.setAttribute('id', 'add-project');
    addButton.innerHTML = "+";
    projectAdd.innerHTML = "Add new project:";
    const projectList = document.createElement("div");
    projectList.setAttribute("class", "project-list");
    projectList.setAttribute("id", "project-list");
    sidebar.appendChild(sortOptions);
    projOptions.appendChild(projectHeading);
    projOptions.appendChild(defaultProject);
    projOptions.appendChild(projectList);
    projOptions.appendChild(projectAdd);
    projectAdd.appendChild(addButton);
    sidebar.appendChild(projOptions);    
}

//move this to a "functionality" page rather than build
const updateProjectList = (projectList) => {
    if (projectList.length === 0) {
        return;
    }

    if (currentProject === 0) {
        const defaultCheck = document.getElementById("default-check");
        defaultCheck.setAttribute('src', `${CheckCircleOutline}`);
    }
    const projects = document.getElementById("project-list");
    while (projects.hasChildNodes()) {
        projects.removeChild(projects.firstChild);
    }
    const renderProjects = document.createElement('ul');
    renderProjects.setAttribute("class", "render-projects");  
    projectList.forEach((project, x) => {
        let li = document.createElement('li');
        if (project.id === currentProject) {
            li.innerHTML = `<img class="project-check active" id="project-check${project.id}" src=${CheckCircleOutline}></img><div>${project.name}</div> <div class="project-option active ${x}"><div class="rename-project" id="rename-project${x}">Rename</div><div class="delete-project" id="delete-project${x}">Delete</div></div>`;
        }
        else {
            li.innerHTML = `<img class="project-check inactive" id="project-check${project.id}" src=${CircleOutline}><div>${project.name}</div> <div class="project-option inactive"><div class="rename-project" id="rename-project${x}">Rename</div><div class="delete-project" id="delete-project${x}">Delete</div></div>`;
        }
        renderProjects.appendChild(li);
    });
    projects.appendChild(renderProjects);
    updateProjectEvents();
}

const buildContainer = () => {
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
    <label for="task">Task</label><input id="task"></input>
    <label for="description">Description</label><input id="description"></input>
    <label for="due-date">Due Date</label><input type="date" id="due-date"></input>
    <label for="priority">Priority</label><select id="priority" name="priority"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>
    <button type="submit" for="task-form">Add Task</button>`;

    container.appendChild(taskForm);
}

const buildTaskList = () => {
    const container = document.getElementById("container");
    const addTask = document.createElement("button");
    const taskList = document.createElement("div");
    taskList.setAttribute("class", "task-list");
    taskList.setAttribute("id", "task-list");
    addTask.setAttribute("id", "add-task");
    addTask.innerHTML = "Add Task";
    container.appendChild(addTask);
    container.appendChild(taskList);
    const taskTable = document.createElement("table");
    taskTable.setAttribute("id", "task-table");
    taskTable.innerHTML = `
        <thead>
        <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Date Due</th>
            <th>Priority</th>
            <th>Complete?</th>
        </tr>
        </thead>`;
        container.appendChild(taskTable);
    const tableBody = document.createElement("tbody");
    tableBody.setAttribute("class", "table-body");
    tableBody.setAttribute("id", "table-body");
    taskTable.appendChild(tableBody);
}

const updateTaskTable = (allTasks, dateCutOff, sortPriority) => {
    const tableBody = document.getElementById("table-body");
    while (tableBody.hasChildNodes()) {  
        tableBody.removeChild(tableBody.firstChild);
    };  
    for (let x = 0; x < allTasks.length; x++) {
        if (currentProject === allTasks[x].projectID  || currentProject === 0) {
            const row = document.createElement("tr");
            let date = format(parseISO(allTasks[x].dueDate), "yyyy-MM-dd");
            let complete = `<img src="${CircleOutline}" class="complete-button" id="complete-button${x}">`;
            switch (allTasks[x].complete){
                case true: complete = `<img src="${CheckCircleOutline}" class="complete-button" id="complete-button${x}">`; break;
                //case false: complete = `<img src="${CircleOutline}"`; break;
            }

            if (compareAsc(parseISO(allTasks[x].dueDate), dateCutOff) === 1) {
                
            }
            else if (sortPriority === true && allTasks[x].priority !== "high") {

            }
            else {
                row.innerHTML = `
                <td>${allTasks[x].task}</td>
                <td>${allTasks[x].description}</td>
                <td>${date}</td>
                <td>${allTasks[x].priority}</td>
                <td>${complete}</td>
                <td><div><img src="${DotsVertical}" class="task-selection" id="task-selection${x}"><div class="task-select" id="task-select${x}" style="display:none"><div class="edit-button" id="edit${x}"><img src=${CircleEditOutline}></div><div class="delete-button" id="delete${x}"><img src=${DeleteCircleOutline}></div></div></div></td>
                `;
            tableBody.appendChild(row);
            }

        }
        sortDate();
        
    };
    updateTaskEvents();

    
};