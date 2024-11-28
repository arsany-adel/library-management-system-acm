export type Book = {
    id: number;
    title: string;
    author: string;
    isBorrowed: boolean;
    year: number;
    borrowedBy: string | null;
    category: string;
}
