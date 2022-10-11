/* eslint-disable import/no-cycle */
import Book from '../index.js';
import Books from './books.js';
import luxon from './luxon.js';

const books = new Books();

const awesomeBooks = document.createElement('div');
awesomeBooks.innerHTML = '';

document.getElementById('date').innerText = luxon.DateTime.now().setLocale('en-US').toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);

const addToList = (bookObj, index) => {
  const timeStamp = () => {
    let time = '';
    if (Book.timeStamp() - bookObj.date < 1) {
      time = 'Just now';
    } else {
      time = `${Book.timeStamp() - bookObj.date} minutes ago`;
    }
    return time;
  };
  const container = document.createElement('div');
  container.className = 'container';
  container.setAttribute('id', bookObj.id);

  if (index % 2 === 0) {
    container.style.backgroundColor = '#d3d3d3';
  }
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  container.appendChild(wrapper);

  const bookName = document.createElement('div');
  bookName.innerText = bookObj.title;
  wrapper.appendChild(bookName);

  const byText = document.createElement('div');
  byText.innerText = 'By';
  wrapper.appendChild(byText);

  const authName = document.createElement('div');
  authName.innerText = bookObj.author;
  wrapper.appendChild(authName);

  const duration = document.createElement('div');
  duration.style.textAlign = 'center';
  duration.innerText = timeStamp();
  wrapper.appendChild(duration);

  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Remove';
  container.appendChild(buttonDelete);

  buttonDelete.addEventListener('click', () => {
    books.removeBook(bookObj.id);
  });

  awesomeBooks.appendChild(container);
  const section = document.body.querySelector('#awesome-books');
  section.appendChild(awesomeBooks);
};

export default addToList;