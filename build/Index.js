"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// step 1: import required modules
const BookList_js_1 = require("./BookList.js");
const LibraryUtils_js_1 = require("./LibraryUtils.js");
const LibraryUtils_js_2 = require("./LibraryUtils.js");
// step 3: add books
function generateBooks(library) {
    for (let i = 1; i <= 5; i++) {
        console.log(`book ${i}`);
        let id = (0, LibraryUtils_js_1.generateId)();
        let title = prompt("Title: ") || "";
        let author = prompt("Author: ") || "";
        let year = parseInt(prompt("Year: ") || "0", 10);
        let category = prompt("Category: ") || "";
        let isBorrowed = false;
        let borrowedBy = null;
        let newBook = {
            id, title, author, isBorrowed, year, borrowedBy, category
        };
        if ((0, LibraryUtils_js_2.validateBook)(newBook) == false) {
            console.log("invalid book fields");
            i--;
            continue;
        }
        library.addBook(newBook);
    }
}
function searchBook(library) {
    console.log("");
    let searchString = prompt("Enter a book's title or author: ") || "";
    let matchedBooks = library.searchBooks(searchString);
    if (matchedBooks.length == 0) {
        console.log("no book found");
        return [];
    }
    for (let i = 1; i <= matchedBooks.length; i++) {
        let currBook = matchedBooks[i - 1];
        console.log(`Book #${i}`);
        console.log("==============================");
        console.log(`id = ${currBook.id}`);
        console.log(`title = ${currBook.title}`);
        console.log(`author = ${currBook.author}`);
        console.log(`isBorrowed = ${currBook.isBorrowed}`);
        console.log(`year = ${currBook.year}`);
        console.log(`borrowedBy = ${currBook.borrowedBy}`);
        console.log(`category = ${currBook.category}`);
        console.log("");
    }
    return matchedBooks;
}
function borrowBook(library) {
    let borrower = prompt("Enter the borrower's name: ") || "Sayed";
    library.markAsBorrowed(3, borrower);
    library.markAsBorrowed(5, borrower);
}
function returnBook(library) {
    library.markAsReturned(3);
}
function removeBook(library) {
    library.removeBook(4);
}
function displayDetails(library) {
    library.printBooks();
    let borrowedBooks = library.getBorrowedBooks();
    console.log("");
    console.log("Borrowed Books: ");
    for (let i = 1; i <= borrowedBooks.length; i++) {
        let currBook = borrowedBooks[i - 1];
        console.log(`Book #${i}`);
        console.log("==============================");
        console.log(`id = ${currBook.id}`);
        console.log(`title = ${currBook.title}`);
        console.log(`author = ${currBook.author}`);
        console.log(`isBorrowed = ${currBook.isBorrowed}`);
        console.log(`year = ${currBook.year}`);
        console.log(`borrowedBy = ${currBook.borrowedBy}`);
        console.log(`category = ${currBook.category}`);
        console.log("");
    }
}
function main() {
    // step 2: initialize the library
    let library = new BookList_js_1.BookList();
    generateBooks(library);
    while (true) {
        console.log("1) search for a book");
        console.log("2) borrow a book");
        console.log("3) return a book");
        console.log("4) remove a book");
        console.log("5) show all library books");
        let choice = parseInt(prompt("Enter your choice: ") || "0");
        while (Number.isNaN(choice) || choice == 0) {
            console.log("invalid choice");
            choice = parseInt(prompt("Enter your choice: ") || "0");
        }
        switch (choice) {
            case 1:
                searchBook(library);
                break;
            case 2:
                searchBook(library);
                break;
            case 3:
                borrowBook(library);
                break;
            case 4:
                removeBook(library);
                break;
            case 5:
                displayDetails(library);
                break;
        }
    }
}
main();
