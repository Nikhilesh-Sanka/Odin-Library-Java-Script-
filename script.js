//Fuck you//
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
//Functions Needed//
const renderBooks = (array) => {
    bookTable.innerHTML="";
    for (let book of array){
        bookTable.innerHTML+=`<tr id="${book.id}">
                                <td>${book.number}.)</td>
                                <td>${book.title}</td>
                                <td>${book.author}</td>
                                <td>${book.pages}</td>
                                <td><button id="${book.id}button">remove</button></td>
                              </tr>`
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
        books.push({id:"bookn",title:bookTitle.value,author:bookAuthor.value,pages:bookPages.value});
        correctBookId(books);
    }
    toggleAddBox();
    clearInputs();
}
const removeBook = (event) => {
    console.log(event.target.parentNode.parentNode);
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

