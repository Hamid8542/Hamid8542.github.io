/**
 * newbook.js
 */
 "use strict";

 import { addNewBook } from "../datasource/catalog.js";
 
 (function(){
 
     async function initAddNewBook() {
         const formNewBook = document.getElementById("formNewBook");
         console.log(formNewBook);
         const title = document.getElementById("title");
         const isbn = document.getElementById("isbn");
         const overdueFee = document.getElementById("overdueFee");
         const publisher = document.getElementById("publisher");
         const datePublished = document.getElementById("datePublished");
         formNewBook.addEventListener("submit", async function (event) {
             event.preventDefault();
             const strTitle = title.value;
             const strISBN = isbn.value;
             const strOverdueFee = overdueFee.value;
             const strPublisher = publisher.value;
             const strDatePublished = datePublished.value;
             const newBookObj = {
                 "isbn": strISBN,
                 "title": strTitle,
                 "overdueFee": strOverdueFee,
                 "publisher": strPublisher,
                 "datePublished": strDatePublished
             };
             const newBookAdded  = await addNewBook(newBookObj);
             title.value = "";
             isbn.value = "";
             overdueFee.value = "";
             publisher.value = "";
             datePublished.value = "";
             title.focus();
         })
     }
 
     initAddNewBook();
 
 })();
