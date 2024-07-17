//Variables Needed//
let books=[];
let bookTable=document.querySelector("tbody");
let addBox=document.querySelector(".add-box");
let bookTitle=document.querySelector("#title");
let bookAuthor=document.querySelector("#author");
let bookPages=document.querySelector("#pages");
let addBookButton=document.querySelector(".add-button");
let submitButton=document.querySelector("#submit");
let closeButton=document.querySelector("#close-button");
//Class That Creates Book Objects//
class Book{
    constructor(id,title,author,pages){
        this.id=id;
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    renderBook () {
        bookTable.innerHTML+=`<tr id="${this.id}">
                                <td>${this.number}.)</td>
                                <td>${this.title}</td>
                                <td>${this.author}</td>
                                <td>${this.pages}</td>
                                <td><button id="${this.id}button">remove</button></td>
                              </tr>`
    }

}
//Functions Needed//
const renderBooks = (array) => {
    bookTable.innerHTML="";
    for (let book of array){
        book.renderBook();
    }
    document.querySelectorAll("tr button").forEach((button) => {
        button.addEventListener("click",removeBook);
    })
}
const correctBookId = (array) => {
    for (let i=0;i<array.length;i++){
        array[i].id=`book${i+1}`;
        array[i].number=`${i+1}`;
    }
    renderBooks(array);
}
const toggleAddBox = () =>{
    addBox.classList.toggle("close-open");
}
const addInputValues = (event) => {
    event.preventDefault();
    if(bookTitle.value!==""&&bookAuthor.value!==""&&bookPages.value!==""){
        books.push(new Book("bookn",bookTitle.value,bookAuthor.value,bookPages.value));
        correctBookId(books);
    }
    toggleAddBox();
    clearInputs();
}
const removeBook = (event) => {
    books=books.filter((book) => book.id!==event.target.parentNode.parentNode.id);
    correctBookId(books);
}
const clearInputs = () => {
    bookAuthor.value="";
    bookTitle.value="";
    bookPages.value="";
}
//Integrating the Functions on the DOM//
addBookButton.addEventListener("click",toggleAddBox);
submitButton.addEventListener("click",addInputValues);
closeButton.addEventListener("click",toggleAddBox);
closeButton.addEventListener("click",clearInputs);

