class Status {
  constructor() {
    this.arrs = [
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

    this.arrs = JSON.parse(localStorage.getItem('arrs')) || [];
  }

  static changeStatus() {
    const x = document.getElementById('myCheck').checked;
    if (x) {
      this.arrs.completed = !this.arrs.completed;
    }
    localStorage.setItem('arrs', JSON.stringify(this.arrs));
    console.log(this.arrs);
  }

  // const toggleBullet = (arrs, id) => {
  //   const bullet = arrs.find((task) => task.id === id);
  //   if (bullet) {
  //   bullet.completed = !bullet.completed;
  //   }
  // };
}
export default Status;
