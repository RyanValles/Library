class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;   
    }
}
let page = document.getElementById('array')
//user input and put it into an array
let form = document.querySelector('#form')

function addBookToLibrary() {
    // reset array everytime
    myLibrary.splice(0, myLibrary.length)
    event.preventDefault();

    //get values
    let title = document.querySelector("#title").value
    let author= document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read =  document.querySelector("#read").checked
        if(read === false){
            read = 'Not read'
             }else{read = 'Read'}

    //add values to book   
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);

    //append book info and buttons
    function append(){ 
        let books = document.createElement('p')
        books.classList.add('books')
        {for (objects of myLibrary) {
             for (let prop in objects) {
                Object.prototype.hasOwnProperty.call(prop)
                    //read btn
                    if(objects[prop] === 'Read'){
                        const readBtn = document.createElement('button')
                        readBtn.innerHTML = "Read"
                        readBtn.classList.add('readBtn')
                        readBtn.addEventListener('click', () =>{
                            if (readBtn.innerHTML=="Read") readBtn.innerHTML = "Not Read";
                            else readBtn.innerHTML = "Read";
                            })
                        books.appendChild(readBtn)
                        page.appendChild(books)}
                        //read btn
                    if(objects[prop] === 'Not read'){
                            const readBtn = document.createElement('button')
                            readBtn.innerHTML = "Not read"
                            readBtn.classList.add('readBtn')
                            readBtn.addEventListener('click', () =>{
                                if (readBtn.innerHTML=="Read") readBtn.innerHTML = "Not Read";
                            else readBtn.innerHTML = "Read";
                                })
                            books.appendChild(readBtn)
                            page.appendChild(books)
                    }
                    if(objects[prop] != 'Read' && objects[prop] != 'Not read') {
                        let eachProp = document.createElement('p');
                        eachProp.innerHTML = objects[prop];
                        books.appendChild(eachProp);
                        page.appendChild(books)}
                } 
            }  
         }
              
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = "🗑️"
        removeBtn.classList.add('removeBtn')
        removeBtn.addEventListener('click', () =>{
            books.style.display = 'none'
                })
        books.appendChild(removeBtn)
    }

    append()
    form.reset()
}

//array to store books
let myLibrary = [];

