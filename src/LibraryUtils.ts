import { Book } from "./Book.js";

let idCount: number = 1;

export function generateId(): number {
    return idCount++;
}

export function validateBook(book: Book): boolean {
    if (book == null) return false;

    const emptyStrings: boolean = (book.author.length == 0 || book.borrowedBy != null && book.borrowedBy.length == 0 || book.category.length == 0 || book.title.length == 0);

    const invalidYear: boolean = book.year <= 0 || book.year >= new Date().getFullYear();

    const invalidBorrowing: boolean = book.isBorrowed == false && book.borrowedBy != null || book.isBorrowed == true && book.isBorrowed == null;

    return !(emptyStrings || invalidYear || invalidBorrowing);
}