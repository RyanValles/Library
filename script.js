class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
       
    }
}

//user input and put it into an array
const input = document.getElementById('input')
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
}


const percy = new Book('percy jackson', 'joe', 567, 'read')
//display books on screen
let books = document.getElementById('array');
let myLibrary = [percy];
//for each book
for (objects of myLibrary) {
    // each book property
    for (let prop in objects) {
       Object.prototype.hasOwnProperty.call(prop) 
        //create and append object property
        let eachProp = document.createElement('p');
        eachProp.innerHTML = objects[prop];
        books.appendChild(eachProp);
      }
    
  }