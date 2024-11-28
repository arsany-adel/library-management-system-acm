import { Book } from "./Book.js";


export class BookList {
    private books: Book[];

    constructor(){
        this.books = [];
    }

    // helper functions
    private getBookIndexById(id: number): number {
        for(let index: number = 0; index < this.books.length; index++) {
            if (this.books[index].id == id) {
                return index;
            }
        }

        return -1;
    }

    isExisted(index: number): boolean {
        return index != -1;
    }


    // main functions
    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: number): void {
        const index: number = this.getBookIndexById(id);

        if (this.isExisted(index)) {
            console.log("Book not found");
            return;
        }

        this.books.splice(index, 1);
        console.log("Book is removed successfuly");
    }

    searchBooks(query: string): Book[] {
        let matchedBooks: Book[] = [];

        this.books.forEach((book) => {
            if (book.author == query || book.title == query) {
                matchedBooks.push(book);
            }
        });

        return matchedBooks;
    }

    markAsBorrowed(id: number, borrower: string): void {
        const index: number = this.getBookIndexById(id);

        if (this.isExisted(index)) {
            console.log("Book not found");
            return;
        }

        this.books[index].isBorrowed = true;
        this.books[index].borrowedBy = borrower;

        console.log("a book is borrowed successfuly");
    }

    markAsReturned(id: number): void {
        const index: number = this.getBookIndexById(id);

        if (this.isExisted(index)) {
            console.log("Book not found");
            return;
        }

        this.books[index].borrowedBy = null;
        this.books[index].isBorrowed = false;

        console.log("Book successfuly modified");
    }

    getBorrowedBooks(): Book[] {
        let borrowedBooks: Book[] = [];

        this.books.forEach((book) => {
            if (book.isBorrowed) {
                borrowedBooks.push(book);
            }
        });

        return borrowedBooks;
    }

    printBooks(): void {
        for (let i: number = 0; i < this.books.length; i++) {
            const currBook: Book = this.books[i];

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