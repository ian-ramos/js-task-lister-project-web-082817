/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1;
  return class Task {
    constructor(description, priority, list) {
      //your code here
      this.id = id++;
      this.description = description;
      this.priority = priority;
      if (list) {
        this.listId = list.id;
      }
      Task.all.push(this);
    }

    list() {
      return List.all.find(item => {
        return item.id === this.listId;
      });
    }
  };
})();

Task.all = [];
