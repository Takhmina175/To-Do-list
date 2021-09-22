import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import { changeStatus } from './status.js';

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

  const divBtn = document.createElement('div');
  divBtn.setAttribute('id', 'btnCheck');

  divBtn.innerHTML = '<input type="checkbox" id="myCheck" value = todoEl.completed>';
  divBtn.addEventListener('change', changeStatus);

  const newTask = document.createElement('p');
  newTask.innerText = todoEl.description;

  div.append(divBtn);
  todoList.append(div);
  div.append(newTask);
  todoList.append(div);
  const indx = document.createElement('div');
  indx.setAttribute('class', 'verticalDots');
  indx.innerHTML = INDEX;
  div.append(indx);
  todoList.append(div);
});
