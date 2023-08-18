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

}

const buildContainer = () => {
    const container = document.getElementById("container");
    const taskForm = document.createElement('form');
    taskForm.setAttribute("id", "task-form");
    taskForm.setAttribute("name", "task-form")
    taskForm.innerHTML = '<label>Task</label><input></input><label>Description</label><input></input><label>Due Date</label><input type="date"></input><label>Priority</label><select id="priority" name="priority"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select><label>Complete?</label><select><option>Yes</option><option>No</option></select><button type="submit" for="task-form">Add Task</button>';

    container.appendChild(taskForm);
    
}