// console.log("it's alive!🍔")

var titleInputField = document.querySelector('.website-title-input');
var urlInputField = document.querySelector('.website-URL-input');
var enterButton = document.querySelector('.enter');
var savedBookmarkTitle = document.querySelector('.bookmark-website-title');
var savedBookmarkUrl = document.querySelector('.bookmark-website-url');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var bookmarks = document.querySelector('ul');

enterButton.addEventListener('click', errorMessage);
titleInputField.addEventListener('keyup', enableButton);
urlInputField.addEventListener('keyup', enableButton);
bookmarks.addEventListener('click', deleteBookmark);
bookmarks.addEventListener('click', readLink);

// bookmarks.addEventListener('click', function(event){

// urlInputField = document.querySelector('.website-URL-input').value;
//   var savedBookmarkUrl = document.querySelector('.bookmark-website-url');
//   if (event.target.className === 'bookmark-website-url') {
//     console.log(urlInputField);
//     document.location.href = `https://${savedBookmarkUrl.value}/`
//     // window.open(`${urlInputField}.value`, '_blank');
//   } 
// })

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
            </li>`
  var makeBookMark = document.querySelector("ul");
  makeBookMark.appendChild(newBookmark);
  clearInputFields();
  enableButton();
};

function clearInputFields(){
  titleInputField.value = '';
  urlInputField.value = '';
};

function enableButton() {
  enterButton.disabled = false;
};

function readLink(event) {
  var readButton = document.querySelector('bookmarks');
    if (event.target.className === 'read-button') {
    event.target.classList.toggle('read-button-after');
  } else {
    (event.target.className === 'read-button-after');
    event.target.classList.toggle('read-button')
  }
};


function deleteBookmark(event) {
  if (event.target.className ==='delete-button') {
  event.target.parentElement.remove();
  }
};



// note: get regex function from kevin for phase 4//


              // Work left to do //


// Phase Zero //
// The URL of the bookmark should be a clickable link//

// Phase Two
// The application should be responsive and work equally well on desktop and mobile.

// Phase Three
// The application should be able to keep count of the total number of links currently on the page.
// The application should be able to keep count of the total number of read and unread links currently on the page.

// Phase Four
// Add a “Clear Read ” button which clears all the read bookmarks when clicked.
// The user should not to be able to add a URL that isn’t valid.






// var clearButton = document.querySelectorAll('.clear');

// clearButton.addEventListener('click', clearReadBookmarks);

// function clearReadBookmarks(event) {
//   console.log(event)
//   if (event.target.className === 'read-button') {
//   event.target.parentElement.remove();
//   }
// }








