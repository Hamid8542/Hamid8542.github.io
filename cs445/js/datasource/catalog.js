/**
 * catalog.js
 */
"use strict";

export async function getBooks () {
    let response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
    let books = await response.json();
    return books;
}

export async function addNewBook(book) {
    let response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let newBookAdded = await response.json();
    return newBookAdded;
}
