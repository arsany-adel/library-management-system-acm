// step 1: import required modules
import { BookList } from "./BookList.js";
import { Book } from "./Book.js";
import { generateId } from "./LibraryUtils.js";
import { validateBook } from "./LibraryUtils.js";

// step 3: add books
function generateBooks(library: BookList): void {

    for (let i: number = 1; i <= 5; i++) {
        console.log(`book ${i}`);

        let id: number = generateId();
        let title: string = prompt("Title: ") || "";
        let author: string = prompt("Author: ") || "";
        let year: number = parseInt(prompt("Year: ") || "0", 10);
        let category: string = prompt("Category: ") || "";
        let isBorrowed: boolean = false;
        let borrowedBy: string | null = null;
    
        let newBook: Book = {
            id, title, author, isBorrowed, year, borrowedBy, category
        }
    
        if (validateBook(newBook) == false) {
            console.log("invalid book fields");
            i--;
            continue;
        } 
    
        library.addBook(newBook);
    }
    
}

function searchBook(library: BookList): Book[] {
    console.log("");
    let searchString: string = prompt("Enter a book's title or author: ") || "";

    let matchedBooks: Book[] = library.searchBooks(searchString);

    if (matchedBooks.length == 0) {
        console.log("no book found");
        return [];
    }

    for (let i: number = 1; i <= matchedBooks.length; i++) {
        let currBook: Book = matchedBooks[i - 1];

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

function borrowBook (library: BookList): void {
    let borrower: string = prompt("Enter the borrower's name: ") || "Sayed";

    library.markAsBorrowed(3, borrower);
    library.markAsBorrowed(5, borrower);
}

function returnBook(library: BookList): void {
    library.markAsReturned(3);
}

function removeBook(library: BookList): void {
    library.removeBook(4);
}

function displayDetails(library: BookList): void {
    library.printBooks();

    let borrowedBooks: Book[] = library.getBorrowedBooks();

    console.log("");
    console.log("Borrowed Books: ");
    for (let i: number = 1; i <= borrowedBooks.length; i++) {
        let currBook: Book = borrowedBooks[i - 1];

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

function main(): void {
    // step 2: initialize the library
    let library: BookList = new BookList();

    generateBooks(library);

    while(true) {
        console.log("1) search for a book");
        console.log("2) borrow a book");
        console.log("3) return a book");
        console.log("4) remove a book");
        console.log("5) show all library books");

        let choice: number = parseInt(prompt("Enter your choice: ") || "0");

        while (Number.isNaN(choice) || choice == 0) {
            console.log("invalid choice");
            choice = parseInt(prompt("Enter your choice: ") || "0");
        }

        switch(choice) {
            case 1: searchBook(library); break;
            case 2: borrowBook(library); break;
            case 3: returnBook(library); break;
            case 4: removeBook(library); break;
            case 5: displayDetails(library); break;
        }
    }
}

main();