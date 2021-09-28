class Library {
  constructor() {
    this.arrs = [];
  }

  static changeStatus(arrs, index) {
    if (this.arrs[index].completed === true) {
      this.arrs[index].completed = false;
    } else {
      this.arrs[index].completed = true;
    }
    localStorage.setItem('todoList', JSON.stringify(this.arrs));
  }

  static addTask(arrs, description) {
    this.arrs.push({ description });
  }

  static deleteTask(arrs, index) {
    this.arrs = this.arrs.filter((i) => i !== index);
  }

  static editTask(arrs, id, value) {
    const task = arrs.find((task) => task.index === id);
    if (task) {
      task.description = value;
    }
  }

  static clearAllTask(arrs) {
    this.arrs.filter((task) => task.completed !== true);
  }

  static loadFromStorage() {
    this.arrs = JSON.parse(localStorage.getItem('todoList')) || [];
  }

  static saveToStorage(arrs) {
    localStorage.setItem('todoList', JSON.stringify(this.arrs));
  }
}
export default Library;
