import luxon from './luxon.js';

let data = [];
const awesomeBooks = document.createElement('div');
awesomeBooks.innerHTML = '';

document.getElementById('date').innerText = luxon.DateTime.now().setLocale('en-US').toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);

const addToList = (bookObj, index) => {
  const minutes = new Date().getMinutes();
  const timeStamp = () => {
    let time = '';
    if (minutes - bookObj.date < 1) {
      time = 'Just now';
    } else {
      time = `${bookObj.date} minutes ago`;
    }
    return time;
  };
  timeStamp();
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

  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Remove';
  container.appendChild(buttonDelete);

  buttonDelete.addEventListener('click', () => {
    const { id } = bookObj;
    const book = document.getElementById(id);
    data = localStorage.getItem('BOOKS');
    data = JSON.parse(data);
    book.remove();
    data = data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('BOOKS', JSON.stringify(data));
    window.location.reload();
    return false;
  });

  awesomeBooks.appendChild(container);
  const section = document.body.querySelector('#awesome-books');
  section.appendChild(awesomeBooks);
};

export default addToList;