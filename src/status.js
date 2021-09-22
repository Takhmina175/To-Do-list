import { bindAll } from 'lodash';

function changeStatus() {
  document.getElementById('btnCheck').firstElementChild.value = true;
}

export { changeStatus };
