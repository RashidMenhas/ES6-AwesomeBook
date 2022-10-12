import addToList from './add.js';

class Books {
  constructor() {
    this.data = [];
  }

  addBook=(book) => {
    this.data.push(book);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
    addToList(book);
  }
}

export default Books;