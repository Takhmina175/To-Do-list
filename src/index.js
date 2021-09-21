import _ from 'lodash';// eslint-disable-line no-unused-vars
import './style.css';

const UNCHECKED = '<i class="bi bi-square"></i>';
const CHECKED = '<i class="bi bi-check-square"></i>';
const INDEX = '<i class="bi bi-three-dots-vertical"></i>';
const arrs = [
  {
    completed: true,
    description: 'Buy milk from the market',
    index: 0,
  },
  {
    completed: false,
    description: 'Prepare meal',
    index: 1,
  },
];

const todoList = document.getElementById('todo-list');
arrs.forEach((todoEl) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'elem');
  div.innerHTML = todoEl.completed ? UNCHECKED : CHECKED;
  const newTask = document.createElement('p');
  newTask.innerText = todoEl.description;
  todoList.append(div);
  div.append(newTask);
  todoList.append(div);
  const indx = document.createElement('div');
  indx.setAttribute('class', 'verticalDots');
  indx.innerHTML = INDEX;
  div.append(indx);
  todoList.append(div);
});
