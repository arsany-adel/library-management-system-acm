"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
exports.validateBook = validateBook;
let idCount = 1;
function generateId() {
    return idCount++;
}
function validateBook(book) {
    if (book == null)
        return false;
    const emptyStrings = (book.author.length == 0 || book.borrowedBy != null && book.borrowedBy.length == 0 || book.category.length == 0 || book.title.length == 0);
    const invalidYear = book.year <= 0 || book.year >= new Date().getFullYear();
    const invalidBorrowing = book.isBorrowed == false && book.borrowedBy != null || book.isBorrowed == true && book.isBorrowed == null;
    return !(emptyStrings || invalidYear || invalidBorrowing);
}
