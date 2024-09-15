const newBooks = [{'Pushkin':'Evgeniy Onegin', 'Mihail Sholohov': 'Molodaya Gvardia'}];

class Library {
    #books = [];
    constructor(books = this.#books){
        this.#books = books;
    };
    
    showAllBooks(){
        console.log(this.#books);
    }
}

const firstLibrary = new Library(newBooks);
firstLibrary.showAllBooks();