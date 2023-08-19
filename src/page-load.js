export default function loadpage() {
     buildLayout();  
     buildSidebar(); 
     buildContainer();
}

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
    const projectList = document.createElement("div");
    projectList.setAttribute = ("class", "project-list");
    projectList.setAttribute = ("id", "project-list");
    sidebar.appendChild(projectList);
    updateProjectList();
}

//move this to a "functionality" page rather than build
const updateProjectList = () => {
    let currentList = JSON.parse(localStorage.getItem("projectList"));
    console.table(currentList);
    currentList.forEach((project) => {
        console.log(`This is project ${project.id}`);
        
    });
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
    //taskForm elements below: task, description, due-date, priority, (completed not neccessary for entry)
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
    storageLookup.setAttribute("id", "storage-lookup");
    storageLookup.innerHTML = "Storage";
    container.appendChild(storageLookup);
}

