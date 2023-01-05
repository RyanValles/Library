class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
       
    }
}

//user input and put it into an array
let form = document.querySelector('#form')

function addBookToLibrary() {
    myLibrary.splice(0, myLibrary.length)
    event.preventDefault();
    let title = document.querySelector("#title").value
    let author= document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read =  document.querySelector("#read").checked
        if(read === false){
            read = 'not read'
             }else{read = 'read'}
        
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
    bob()
    form.reset()
}
//array to store books
let myLibrary = [];

//display books on screen
let books = document.getElementById('array');
function bob() {for (objects of myLibrary) {
    // each book property
    for (let prop in objects) {
       Object.prototype.hasOwnProperty.call(prop) 
        //create and append object property
        let eachProp = document.createElement('p');
        eachProp.innerHTML = objects[prop];
        books.appendChild(eachProp);
      }   
  }}

//submit btn
  const formInfo = document.querySelector(".formInfo")
  formInfo.addEventListener('click', addBookToLibrary)