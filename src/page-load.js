//import updateProjectList from functionalDOM.js;
import { updateTaskEventListeners } from "./index";

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
    const projectHeading = document.createElement("div");
    projectHeading.setAttribute("class", "project-heading");
    projectHeading.setAttribute("id", "project-heading");
    projectHeading.innerHTML = "Projects";
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
    console.log(projectList);
    sidebar.appendChild(projectHeading);
    sidebar.appendChild(projectAdd);
    projectAdd.appendChild(addButton);
    sidebar.appendChild(projectList);
    updateProjectList();
}

//move this to a "functionality" page rather than build
const updateProjectList = () => {
    const projects = document.getElementById("project-list");
    while (projects.hasChildNodes()) {
        projects.removeChild(projects.firstChild);
    }
    let currentList = JSON.parse(localStorage.getItem("projectList"));
    const renderProjects = document.createElement('ul');
    renderProjects.setAttribute("class", "render-projects");
    console.log(renderProjects);   
    currentList.forEach((project) => {
        console.log(`This is project ${project.id}`);
        let li = document.createElement('li');
        li.innerHTML = project.name;
        renderProjects.appendChild(li);
    });
    projects.appendChild(renderProjects);
    
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
    //taskForm elements below: task, description, due-date, priority, ("completed" not neccessary for entry)
    taskForm.innerHTML = `
    <label for="task">Task</label><input id="task"></input>
    <label for="description">Description</label><input id="description"></input>
    <label for"due-date">Due Date</label><input type="date" id="due-date"></input>
    <label for="priority">Priority</label><select id="priority" name="priority"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>
    <button type="submit" for="task-form">Add Task</button>`;

    container.appendChild(taskForm);
}

const buildTaskList = () => {
    const container = document.getElementById("container");
    const storageLookup = document.createElement("button");
    const taskList = document.createElement("div");
    taskList.setAttribute("class", "task-list");
    taskList.setAttribute("id", "task-list");
    storageLookup.setAttribute("id", "storage-lookup");
    storageLookup.innerHTML = "Storage";
    container.appendChild(storageLookup);
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
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>`;
        container.appendChild(taskTable);
    const tableBody = document.createElement("tbody");
    tableBody.setAttribute("class", "table-body");
    tableBody.setAttribute("id", "table-body");
    taskTable.appendChild(tableBody);
}

const updateTaskTable = (allTasks) => {
    const tableBody = document.getElementById("table-body");
    while (tableBody.hasChildNodes()) {  
        tableBody.removeChild(tableBody.firstChild);
    };  

    for (let x = 0; x < allTasks.length; x++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${allTasks[x].task}</td>
            <td>${allTasks[x].description}</td>
            <td>${allTasks[x].dueDate}</td>
            <td>${allTasks[x].priority}</td>
            <td>${allTasks[x].complete}</td>
            <td><div class="delete-button" id="delete${x}">Delete</div></td>
            <td><div class="edit-button" id="edit${x}">Edit</div></td>
            `;
        tableBody.appendChild(row);
    };
    updateTaskEventListeners();
};

