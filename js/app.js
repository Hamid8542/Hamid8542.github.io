/**
 * booksapp.js
 * @author Abdulhamid Ibrahim
 */
"use strict";

const {Observable,  from } = rxjs;
const { filter } = rxjs.operators;

window.onload = function () {
  
   
    const txtISBN = document.querySelector("#isbn");
    const txtTitle = document.querySelector("#title");  
    const txtOverdueFee = document.querySelector("#overdueFee");
    const txtPublisher = document.querySelector("#publisher");
    const txtDatePublisher = document.querySelector("#datePublished");

    const initAddNewBook = function () {
        const formNewBook = document.querySelector("#formNewBook");
        formNewBook.addEventListener("submit", addNewBook);
    };

    const getBookData = function () {
        const bookObj = {
            "title": txtTitle.value,
            "isbn": txtISBN.value,
            "overdueFee": txtOverdueFee.value,
            "publisher": txtPublisher.value,
            "datePublished": txtDatePublisher.value
        };
        return bookObj;
    };

    const clearFormDataFields = function () {
        txtTitle.value = "";
        txtISBN.value = "";
        txtOverdueFee.value = "";
        txtPublisher.value = "";
        txtDatePublisher.value = "";
    };

    const addNewBook = async function (event) {
        event.preventDefault();
        const bookObj = getBookData(); 
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            "method": "POST",
            "body": JSON.stringify(bookObj),
            "headers": {
                "Content-Type": "application/json"
            }
        });
        if(response.ok) {
            console.log(response.statusText);
            console.log(await response.json());
            clearFormDataFields();
        } else {
            console.log(response.statusText);
        }
    };

    txtTitle.focus();
    initAddNewBook();

//    get books by Apress only

    
    const getBooksPublisher = async function (publisherName) {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
        const books = await response.json();
        from(books)
            .pipe(
                filter(book => book.publisher === publisherName)
                
            ).subscribe(book => console.log(book));
        
    };
    getBooksPublisher("John Wiley and Sons,Inc.");

    

};

