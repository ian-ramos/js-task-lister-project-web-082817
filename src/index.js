const createListForm = document.getElementById("create-list-form");
const newList = document.getElementById("lists");
const createTaskForm = document.getElementById("create-task-form");

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.render();
});

createListForm.addEventListener("submit", e => {
  e.preventDefault();
  const term = document.getElementById("new-list-title").value;
  const newListDiv = document.createElement("div");
  newListDiv.innerText = term;
  newList.appendChild(newListDiv);
  const list = new List(term);
  newListDiv.dataset.id = `${list.id}`;
  const buttonHTML = 

  //add element to task dropdown
  const selectList = document.getElementById("parent-list");
  //clearing out the options so it doesn't duplicate every time submit event happens
  selectList.innerHTML = "";
  for (const el of List.all) {
    const newListOption = document.createElement("option");
    newListOption.innerText = `${el.title}`;
    newListOption.dataset.id = `${el.id}`;
    selectList.appendChild(newListOption);
  }
});

createTaskForm.addEventListener("submit", e => {
  e.preventDefault();
  const description = document.getElementById("new-task-description").value;
  const priority = document.getElementById("new-task-priority").value;
  //pulls index of selected option from option tag
  const listId =
    document.getElementById("parent-list").options.selectedIndex + 1;

  //finds list object
  const listObj = List.all.find(el => el.id === listId);
  const newTask = new Task(description, priority, listObj);
  const divToAddTaskTo = document.querySelector(
    "section " + "[data-id=" + `"${listId}"]`
  );
  const taskList = document.createElement("span");
  divToAddTaskTo.appendChild(taskList);
  taskList.innerHTML = `<br>Task: ${newTask.description} Priority: ${newTask.priority}`;
});
