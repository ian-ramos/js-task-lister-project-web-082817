/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1;
  //const all = []
  return class List {
    constructor(title) {
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
      this.id = id++;
      this.title = title;
      List.all.push(this);
    }

    // static all() {
    //   return all;
    // }

    tasks() {
      return Task.all.filter(task => {
        return task.listId === this.id;
      });
    }
  };
})();

List.all = [];
