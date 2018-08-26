console.log("it's alive!🍔")

var titleInputField = document.querySelector('.website-title-input');
var urlInputField = document.querySelector('.website-URL-input');
var enterButton = document.querySelector('.enter');
var savedBookmarkTitle = document.querySelector('.bookmark-website-title');
var savedBookmarkUrl = document.querySelector('.bookmark-website-url');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');


enterButton.addEventListener('click', addWebsite);


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
};






// Phase One
// *The user should be able to input a title and URL into the appropriate fields
// *When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
// *When the user clicks on the “Mark as Read” button:
// *A class of .read should be added to the bookmark
// *If it already has the class of .read, it should be removed
// *When the user clicks on the “Delete” button, the link should be removed from the page