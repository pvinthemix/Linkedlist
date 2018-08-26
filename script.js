console.log("it's alive!🍔")

var titleInputField = document.querySelector('.website-title-input');
var urlInputField = document.querySelector('.website-URL-input');
var enterButton = document.querySelector('.enter');
var savedBookmarkTitle = document.querySelector('.bookmark-website-title');
var savedBookmarkUrl = document.querySelector('.bookmark-website-url');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');


enterButton.addEventListener('click', addWebsite);
titleInputField.addEventListener('keyup', enableButton);
urlInputField.addEventListener('keyup', enableButton);



function addWebsite() {
  event.preventDefault();
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
            <button class="delete-button"> Delete</button>
            </li>`
        var listWebsites = document.querySelector("ul");
        listWebsites.appendChild(newBookmark);
        clearInputFields();
        enableButton();
};

function clearInputFields(){
  titleInputField.value = '';
  urlInputField.value = '';
}

function enableButton(){
  if (titleInputField.value === '' || urlInputField.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
}






// Phase One
// *The user should be able to input a title and URL into the appropriate fields
// *When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
// *When the user clicks on the “Mark as Read” button:
// *A class of .read should be added to the bookmark
// *If it already has the class of .read, it should be removed
// *When the user clicks on the “Delete” button, the link should be removed from the page

// Phase Two
// If the user omits the title or the URL, the application should not create the link and should instead display an error.
// The application should be responsive and work equally well on desktop and mobile.

// Phase Three
// The button for creating links should be disabled if there are no contents in the title or URL fields.
// The application should be able to keep count of the total number of links currently on the page.
// The application should be able to keep count of the total number of read and unread links currently on the page.

// Phase Four: The Project Strikes Back
// Add a “Clear Read Bookmarks” button which clears all the read bookmarks when clicked.
// The user should not to be able to add a URL that isn’t valid.







