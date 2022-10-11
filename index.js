/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import addToList from './modules/add.js';
import Books from './modules/books.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.date = Book.timeStamp();
    this.id = Math.random();
  }

  static timeStamp =() => {
    const date = new Date();
    return date.getMinutes();
  }
}

const books = new Books();

const getInput = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
};

const addButton = document.getElementById('btn-add');
addButton.addEventListener('click', () => {
  const book = getInput();
  if ((book.author !== '') && (book.title !== '')) {
    books.addBook(book);
  }
});

window.onload = () => {
  books.data = JSON.parse(localStorage.getItem('BOOKS' || '[]'));
  if (books.data === null) {
    books.data = [];
    return;
  }
  books.data.forEach((book, index) => addToList(book, index));
};

document.getElementById('list').addEventListener('click', () => {
  document.getElementById('list').style.color = 'blue';
  document.getElementById('add').style.color = 'black';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('awesome-books').style.display = 'unset';
  document.getElementById('row').style.display = 'none';
  document.getElementById('form-title').style.display = 'none';
  document.getElementById('form').style.display = 'none';
  document.getElementById('section-contact').style.display = 'none';
});

document.getElementById('add').addEventListener('click', () => {
  document.getElementById('list').style.color = 'black';
  document.getElementById('add').style.color = 'blue';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('awesome-books').style.display = 'none';
  document.getElementById('row').style.display = 'none';
  document.getElementById('form-title').style.display = 'flex';
  document.getElementById('form').style.display = 'flex';
  document.getElementById('section-contact').style.display = 'none';
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('list').style.color = 'black';
  document.getElementById('add').style.color = 'black';
  document.getElementById('contact').style.color = 'blue';
  document.getElementById('section-contact').style.display = 'flex';
  document.getElementById('awesome-books').style.display = 'none';
  document.getElementById('row').style.display = 'none';
  document.getElementById('form-title').style.display = 'none';
  document.getElementById('form').style.display = 'none';
});

export default Book;