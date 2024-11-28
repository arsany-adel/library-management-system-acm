"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookList = void 0;
class BookList {
    constructor() {
        this.books = [];
    }
    // helper functions
    getBookIndexById(id) {
        for (let index = 0; index < this.books.length; index++) {
            if (this.books[index].id == id) {
                return index;
            }
        }
        return -1;
    }
    isExisted(index) {
        return index != -1;
    }
    // main functions
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        const index = this.getBookIndexById(id);
        if (this.isExisted(index)) {
            console.log("Book not found");
            return;
        }
        this.books.splice(index, 1);
        console.log("Book is removed successfuly");
    }
    searchBooks(query) {
        let matchedBooks = [];
        this.books.forEach((book) => {
            if (book.author == query || book.title == query) {
                matchedBooks.push(book);
            }
        });
        return matchedBooks;
    }
    markAsBorrowed(id, borrower) {
        const index = this.getBookIndexById(id);
        if (this.isExisted(index)) {
            console.log("Book not found");
            return;
        }
        this.books[index].isBorrowed = true;
        this.books[index].borrowedBy = borrower;
        console.log("a book is borrowed successfuly");
    }
    markAsReturned(id) {
        const index = this.getBookIndexById(id);
        if (this.isExisted(index)) {
            console.log("Book not found");
            return;
        }
        this.books[index].borrowedBy = null;
        this.books[index].isBorrowed = false;
        console.log("Book successfuly modified");
    }
    getBorrowedBooks() {
        let borrowedBooks = [];
        this.books.forEach((book) => {
            if (book.isBorrowed) {
                borrowedBooks.push(book);
            }
        });
        return borrowedBooks;
    }
    printBooks() {
        for (let i = 0; i < this.books.length; i++) {
            const currBook = this.books[i];
            console.log(`Book #${i + 1}`);
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
}
exports.BookList = BookList;
