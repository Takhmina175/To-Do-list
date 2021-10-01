class Library {
  constructor() {
    this.arrs = [];
    this.ptext = document.querySelector('.ptext');
    this.todoList = document.getElementById('todo-list');
  }

  static changeStatus(index, indx, linethrough) {
    if (this.arrs[index].completed === true) {
      this.arrs[index].completed = false;
      indx.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
      linethrough.classList.remove('lineThrough');
    } else {
      this.arrs[index].completed = true;
      indx.innerHTML = '<i class="bi bi-trash"></i>';
      linethrough.classList.add('lineThrough');
    }
    localStorage.setItem('todoList', JSON.stringify(this.arrs));
  }

  render(inputValue) {
    this.todoList.innerHTML = '';
    this.arrs.forEach((todoEl) => {
      const div = document.createElement('div');
      div.setAttribute('class', 'elem');
      // this will create a div for chekbox btn
      const divBtn = document.createElement('div');
      divBtn.setAttribute('id', 'btnCheck');
      // this will create a squre button
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', 'myCheck');
      input.className = 'checkItem';
      input.checked = todoEl.completed;
      divBtn.append(input);
      div.append(divBtn);
      this.todoList.append(div);
      // this will output an inputText content
      const newTask = document.createElement('p');
      newTask.className = 'ptext';
      newTask.innerText = todoEl.description;
      div.append(newTask);
      this.todoList.append(div);
      // create vertical three dots
      const dotIcon = document.createElement('div');
      dotIcon.setAttribute('class', 'verticalDots');
      div.append(dotIcon);
      this.todoList.append(div);

      // change status
      div.addEventListener('input', (e) => {
        const item2Bechanged = e.target.parentElement.parentElement;
        const nodes = Array.from(this.todoList.children);
        const index = nodes.indexOf(item2Bechanged);
        Library.changeStatus(parseInt(index, 10), dotIcon, newTask);
      });
    });
  }

  addTask(description) {
    this.arrs.push({ description });
  }

  static deleteTask(task) {
    this.arrs.splice(task, 1);
  }

  static updateTask = (id, val) => {
    const text = this.arrs.find((task) => task.id === id);
    if (text) {
      this.arrs.description = val;
      console.log(this.arrs);
    }
  };

  static clearAll() {
    this.arrs = this.arrs.filter((i) => i.completed !== true);
  }

  loadFromStorage() {
    this.arrs = JSON.parse(localStorage.getItem('todoList')) || [];
  }

  saveToStorage(arrs) {
    localStorage.setItem('todoList', JSON.stringify(this.arrs));
  }
}
export default Library;
