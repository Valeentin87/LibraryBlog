const newBooks = [{author:'Pushkin',
work:'Evgeniy Onegin'},
{author:'Mihail Sholohov', work: 'Molodaya Gvardia'}];

class Library {
    #books = [];
    constructor(books = this.#books){
        this.#books = books;
    };
    
    showAllBooks(){
        console.log(this.#books);
    };
    
    addBook(title){
        const allAuthors = [];
        const allWorks = [];
        let book;
        for (book of this.#books){
            allAuthors.push(book.author);
            allWorks.push(book.work);
        }
        if (allAuthors.indexOf(title.author) !== -1 && allWorks.indexOf(title.work) !== -1) {
            console.log('данное произведение уже есть в каталоге библиотеки');
            return;
        }
        this.#books.push(title);
        console.log("произведение добавлено");
    }
}

const firstLibrary = new Library(newBooks);
firstLibrary.showAllBooks();
firstLibrary.addBook({'Mihail Sholohov':'Tihiy Don'});
firstLibrary.addBook({'Mihail Sholohov': 'Tihiy Don'});
firstLibrary.showAllBooks();
