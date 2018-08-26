console.log("it's alive!🍔")

var titleInputField = document.querySelector('.website-title-input');
var urlInputField = document.querySelector('.website-URL-input');
var enterButton = document.querySelector('.enter');
var savedBookmarkTitle = document.querySelector('.bookmark-website-title');
var savedBookmarkUrl = document.querySelector('.bookmark-website-url');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var bookmarks = document.querySelector('ul');

enterButton.addEventListener('click', addWebsite);
titleInputField.addEventListener('keyup', enableButton);
urlInputField.addEventListener('keyup', enableButton);
bookmarks.addEventListener('click', deleteBookmark);
bookmarks.addEventListener('click', readLink);


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

function enableButton(){
  if (titleInputField.value === '' || urlInputField.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
};

function readLink(event) {
  var readButton = document.querySelector('read-button');
  if (event.target.className === 'read-button') {
  event.target.classList.toggle('read-button-after');
  }
};

function deleteBookmark(event) {
  event.preventDefault();
  if (event.target.className ==='delete-button'){;
  event.target.parentElement.remove();
  }
};


// get regex function from kevin for phase

enterButton.addEventListener('click', function() {
  if (titleInputField.value == '' || urlInputField.value == '') {
    var errorMessage = document.querySelector('.error-message').innerText = "Must include both title and URL"
    savedBookmarkTitle.innerText = '';
    savedBookmarkUrl.innerText = '';
  } else (errorMessage).innerText = null;
});


// Phase One
// *If it already has the class of .read, it should be removed

// Phase Two
// If the user omits the title or the URL, the application should not create the link and should instead display an error.
// The application should be responsive and work equally well on desktop and mobile.

// Phase Three
// The application should be able to keep count of the total number of links currently on the page.
// The application should be able to keep count of the total number of read and unread links currently on the page.

// Phase Four: The Project Strikes Back
// Add a “Clear Read ” button which clears all the read bookmarks when clicked.
// The user should not to be able to add a URL that isn’t valid.







