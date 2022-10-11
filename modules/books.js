/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
import addToList from './add.js';

class Books {
  constructor() {
    this.data = [];
  }

  addBook(book) {
    this.data.push(book);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
    addToList(book);
  }

  removeBook(id) {
    const book = document.getElementById(id);
    this.data = localStorage.getItem('BOOKS');
    this.data = JSON.parse(this.data);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
    location.reload();
    return false;
  }
}

export default Books;