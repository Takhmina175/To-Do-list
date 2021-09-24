class Status {
  constructor(arrs, description, completed = false) {
    this.index = arrs.length + 1;
    this.description = description;
    this.completed = completed;
    this.arrs = JSON.parse(localStorage.getItem('arrs')) || [];
  }

  static changeStatus(arrs, index) {
    const x = document.getElementById('myCheck').checked;
    if (x) {
      arrs[index].completed = false;
    } else {
      arrs[index].completed = true;
    }
    localStorage.setItem('arrs', JSON.stringify(arrs));
  }
}
export default Status;
