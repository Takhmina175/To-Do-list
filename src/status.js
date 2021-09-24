class Status {
  constructor(arrs, description, completed = false) {
    this.arrs = [];
    this.index = arrs.length + 1;
    this.description = description;
    this.completed = completed;
  }

  static changeStatus(arrs, index) {
    if (this.arrs[index].completed === true) {
      this.arrs[index].completed = false;
    } else {
      this.arrs[index].completed = true;
    }
    localStorage.setItem('todoList', JSON.stringify(this.arrs));
  }

  static loadFromStorage() {
    this.arrs = JSON.parse(localStorage.getItem('todoList')) || [];
  }
}
export default Status;
