document.addEventListener("DOMContentLoaded", () => {
  addTask();
});

function addTask() {
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = document.getElementById("new-task-description").value;

    const ulTasks = document.getElementById("tasks");

    const liTasks = document.createElement("li")

    const priority = document.getElementById("priority").value;
    selectPriority(priority, liTasks); 
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.backgroundColor = "#fff";
    deleteButton.style.color = "#545454";
    deleteButton.style.padding = "4px";
    deleteButton.style.margin = "4px";
    deleteButton.style.borderRadius = "3px";
    deleteButton.addEventListener("click", deleteItem);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.backgroundColor = "#fff";
    editButton.style.color = "#545454";
    editButton.style.padding = "4px";
    editButton.style.margin = "4px";
    editButton.style.borderRadius = "3px";
    editButton.addEventListener("click", editItem);

    liTasks.textContent = `${newTask} `;
    liTasks.appendChild(deleteButton);
    liTasks.appendChild(editButton);
    ulTasks.appendChild(liTasks);
    
    taskForm.reset();

  })
}

function deleteItem(event){
  event.target.parentNode.remove();
}

function editItem(event) {
  const li = event.target.parentNode;
  const btn = event.target;
  
  if (btn.textContent === "Edit") {
    const currentText = li.childNodes[0].textContent;
    
    const input = document.createElement("input");
    input.type = 'text';
    input.value = currentText;
    input.style.marginRight = '5px';
    
    li.replaceChild(input, li.childNodes[0]);
    
    btn.textContent = "Save";
    
  } else {
    const input = li.querySelector('input');
    const newText = input.value;
    
    if (newText) {
      const edited = document.createTextNode(newText + ' ');
      li.replaceChild(edited, input);
    }
    
    btn.textContent = "Edit";
  }
}

function selectPriority(priority, li){
  switch(priority){
    case "high":
      li.style.color = "red"
      break;
    case "medium":
      li.style.color = "yellow"
      break;
    case "low":
      li.style.color = "green"
      break;
  }

}