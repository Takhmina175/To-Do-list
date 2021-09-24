import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import Status from './status';

const INDEX = '<i class="bi bi-three-dots-vertical"></i>';

const todoList = document.getElementById('todo-list');
Status.loadFromStorage();
Status.arrs.forEach((todoEl) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'elem');

  const divBtn = document.createElement('div');
  divBtn.setAttribute('id', 'btnCheck');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', 'myCheck');
  input.className = 'checkItem';
  input.checked = todoEl.completed;

  div.addEventListener('input', (e) => {
    const item2Bechanged = e.target.parentElement.parentElement;
    const nodes = Array.from(todoList.children);
    const index = nodes.indexOf(item2Bechanged);
    Status.changeStatus(Status.arrs, parseInt(index, 10));
  });

  const newTask = document.createElement('p');
  newTask.innerText = todoEl.description;

  const indx = document.createElement('div');
  indx.setAttribute('class', 'verticalDots');
  indx.innerHTML = INDEX;

  divBtn.append(input);
  div.append(divBtn);
  todoList.append(div);
  div.append(newTask);
  todoList.append(div);
  div.append(indx);
  todoList.append(div);
});
