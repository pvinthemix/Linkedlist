

var titleInputField = document.querySelector('.website-title-input');
var urlInputField = document.querySelector('.website-URL-input');
var enterButton = document.querySelector('.enter');
var savedBookmarkTitle = document.querySelector('.bookmark-website-title');
var savedBookmarkUrl = document.querySelector('.bookmark-website-url');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var bookmarks = document.querySelector('ul');
var counterRead = 0;
var counterUnread = 0;
var counterTotalLinks = 0;
var readCountNumber = document.querySelector('.read-count-number');
var unreadCountNumber = document.querySelector('.unread-count-number');
var totalCount = document.querySelector('.total-count');

enterButton.addEventListener('click', errorMessage);
titleInputField.addEventListener('keyup', enableButton);
urlInputField.addEventListener('keyup', enableButton);
bookmarks.addEventListener('click', deleteBookmark);
bookmarks.addEventListener('click', readLink);
bookmarks.addEventListener('click', directLink);

function directLink() {
if (event.target.classList.contains('bookmark-website-url')) {
    document.location.href = `https://${event.target.innerText}/`
  } 
};

function errorMessage() {
  if (titleInputField.value === '' || urlInputField.value === '') {
    document.querySelector('.error-message').innerText = 'Include title AND valid URL';
    enterButton.disabled = true;
  } else {
    document.querySelector('.error-message').innerText = '';
    addWebsite();
    enterButton.disabled = true;
  }
};

function addWebsite() {
  var newBookmark = document.createElement('li');
  newBookmark.innerHTML =                  
            `<li class="single-bookmark">
            <p class="bookmark-website-title">
            ${titleInputField.value}
            </p>
            <hr>
            <p class="bookmark-website-url">
            ${urlInputField.value}
            </p>
            <hr>
            <button class="read-button">Read</button>
            <button class="delete-button">Delete</button>
            </li>`;
  bookmarks.appendChild(newBookmark);
  clearInputFields();
  enableButton();
  counterTotalLinks++;
  updateCounters();
};

function clearInputFields() {
  titleInputField.value = '';
  urlInputField.value = '';
};

function enableButton() {
  enterButton.disabled = false;
};

function readLink(event) {
  if (event.target.classList.contains('read-button')) {
  event.target.classList.toggle('read-button-after');
  event.target.parentElement.classList.toggle('read-card');
  if (event.target.classList.contains('read-button-after')) {
  counterRead++;
  } else {
    counterRead--;
  };
  updateCounters();
  };
};

function deleteBookmark(event) {
  if (event.target.classList.contains('delete-button')) {
  event.target.parentElement.remove();
  counterTotalLinks--;
    if (event.target.parentElement.classList.contains('read-card')) {
    counterRead--;
  };
  updateCounters();
  }
};

function updateCounters() {
  readCountNumber.innerText = counterRead;
  unreadCountNumber.innerText = counterTotalLinks - counterRead;
  totalCount.innerText = counterTotalLinks;
};


///function in progress to clear read bookmarks
// var clearButton = document.querySelectorAll('.clear');

// clearButton.addEventListener('click', clearReadBookmarks);

// function clearReadBookmarks(event) {
//   console.log(event)
//   if (event.target.className === 'read-button') {
//   event.target.parentElement.remove();
//   };
// };








