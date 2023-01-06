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
            read = 'Not read'
             }else{read = 'Read'}
        
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
    append()
    form.reset()
}
//array to store books
let myLibrary = [];

//display books on screen
let page = document.getElementById('array')
function append(){ 
    let books = document.createElement('p')
     {for (objects of myLibrary) {
         for (let prop in objects) {
            ///
            ///do these indivuadualy so  read button can change read
             Object.prototype.hasOwnProperty.call(prop) 
             let eachProp = document.createElement('p');
             eachProp.innerHTML = objects[prop];
            books.appendChild(eachProp);
            page.appendChild(books)
         } 
     }
     const removeBtn = document.createElement('button');
    removeBtn.innerHTML = "🗑️"
    removeBtn.classList.add('removeBtn')
        removeBtn.addEventListener('click', () =>{
            books.style.display = 'none'
        })
    books.appendChild(removeBtn)

    const readBtn = document.createElement('button')
    readBtn.innerHTML = "🗑️Change Read Status"
    readBtn.classList.add('readBtn')
    readBtn.addEventListener('click', () =>{
     const str = books.textContent
     books.textContent = str.replace('Read', 'Not read')
    })
    books.appendChild(readBtn)
}}

  // delete button
