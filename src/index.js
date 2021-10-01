import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import Library from './library';

const inputForm = document.querySelector('.inputForm');
const clearCheckedEl = document.querySelector('#clearAll');
const mainArr = new Library();
const arr = mainArr.loadFromStorage();

mainArr.loadFromStorage();

mainArr.render();

// window.addEventListener('load', Library.render(arr));


// Add Task
inputForm.addEventListener('submit', (event) => {
  const inputText = document.querySelector('#inputText').value;
  event.preventDefault();
  mainArr.addTask(inputText);
  mainArr.saveToStorage(arr);
  mainArr.render(arr);
  document.getElementById('inputText').value = '';
});
// Delete Task
const todoListElem = document.querySelectorAll('.verticalDots');
Array.from(todoListElem).forEach((i) => {
  i.addEventListener('click', (e) => {
    const elem = e.target.parentElement.parentElement;
    const parentEl = elem.parentNode;
    const nodes = Array.from(parentEl.children);
    const index = nodes.indexOf(elem);
    Library.deleteTask(index);
    mainArr.saveToStorage(arr);
    Library.render.render(arr);
  });
});

// // Edit Task
// const inputCont = document.querySelectorAll('.ptext');
// for (let i = 0; i < inputCont.length; i += 1) {
//   inputCont[i].onclick = function () {
//     if (this.hasAttribute('data-clicked')) {
//       return;
//     }
//     this.setAttribute('data-clicked', 'yes');
//     this.setAttribute('data-text', this.innerHTML);

//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('id', 'newInput');
//     input.value = this.innerHTML;
//     input.onblur = function () {
//       const inputParentEl = input.parentElement;
//       const origText = input.parentElement.getAttribute('data-text');
//       const currentText = this.value;

//       if (origText !== currentText) {
//         inputParentEl.removeAttribute('data-clicked');
//         inputParentEl.removeAttribute('data-text');
//         inputParentEl.innerHTML = currentText;
//       } else {
//         inputParentEl.removeAttribute('data-clicked');
//         inputParentEl.removeAttribute('data-text');
//         inputParentEl.innerHTML = origText;
//       }
//     };
//     input.onkeydown = function (event) {
//       if (event.key === 'Enter') {
//         this.onblur();
//       }
//     };
//     this.innerHTML = '';
//     this.append(input);
//     this.firstElementChild.select();
//   };
// }

// Events for Edit Description

const inputs = Array.from(document.querySelectorAll('.ptext'));
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const elem = e.target.parentElement.parentElement;
    const parentEl = elem.parentNode;
    const nodes = Array.from(parentEl.children);
    const index = nodes.indexOf(elem);

    const { value } = e.target;
    Library.updateTask(index, value);
  });
});

const inputCont = Array.from(document.querySelectorAll('.ptext'));
for (let i = 0; i < inputCont.length; i += 1) {
  inputCont[i].onclick = function () {
    if (this.hasAttribute('data-clicked')) {
      return;
    }
    this.setAttribute('data-clicked', 'yes');
    this.setAttribute('data-text', this.innerHTML);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'newInput');
    input.value = this.innerHTML;
    input.onblur = function () {
      const inputParentEl = input.parentElement;
      const origText = input.parentElement.getAttribute('data-text');
      const currentText = this.value;

      if (origText !== currentText) {
        inputParentEl.removeAttribute('data-clicked');
        inputParentEl.removeAttribute('data-text');
        inputParentEl.innerHTML = currentText;
      } else {
        inputParentEl.removeAttribute('data-clicked');
        inputParentEl.removeAttribute('data-text');
        inputParentEl.innerHTML = origText;
      }
    };

    this.innerHTML = '';
    this.append(input);
    this.firstElementChild.select();
  };
}
// Clear All Tasks
clearCheckedEl.addEventListener('click', () => {
  Library.clearAll(arr);
  mainArr.saveToStorage(arr);
  Library.render.render(arr);
});
