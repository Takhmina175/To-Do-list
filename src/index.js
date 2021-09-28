import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import Library from './library';

const INDEX = '<i class="bi bi-three-dots-vertical"></i>';
const todoList = document.getElementById('todo-list');
const inputForm = document.querySelector('.inputForm');
const ptext = document.querySelector('#ptext');
const arr = Library.loadFromStorage();

Library.loadFromStorage();

function render(inputValue) {
  Library.arrs.forEach((todoEl) => {
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
    todoList.append(div);
    // this will output an inputText content
    const newTask = document.createElement('p');
    newTask.className = 'ptext';
    newTask.innerText = todoEl.description;
    div.append(newTask);
    todoList.append(div);
    // this will vertical three dots
    const indx = document.createElement('div');
    indx.setAttribute('class', 'verticalDots');
    indx.innerHTML = INDEX;
    div.append(indx);
    todoList.append(div);

    div.addEventListener('input', (e) => {
      const item2Bechanged = e.target.parentElement.parentElement;
      const nodes = Array.from(todoList.children);
      const index = nodes.indexOf(item2Bechanged);
      Library.changeStatus(Library.arrs, parseInt(index, 10));
    });
  });
}
window.addEventListener('load', render(arr));
inputForm.addEventListener('submit', (event) => {
  const inputText = document.querySelector('#inputText').value;
  event.preventDefault();
  Library.addTask(arr, inputText);
  Library.saveToStorage(arr);
  render(arr);
  document.getElementById('inputText').value = '';
});
