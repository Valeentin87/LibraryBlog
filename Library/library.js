const newBooks = [{author:'Pushkin',
work:'Evgeniy Onegin'},
{author:'Mihail Sholohov', work: 'Molodaya Gvardia'}];

class Library {
    #books = [];
    constructor(books = this.#books){
        const allZip = []
        let book;
        for (book of books) {
            allZip.push(`${book.author} ${book.work}`);
        }
        const zipSet = new Set(allZip);
        
        if (allZip.length == zipSet.size){
        this.#books = books;}
        else {
            console.log('Имеются дубликаты книг');
        }
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
        this.#books.push({author: `${title.author}`,work: `${title.work}`});
        console.log("произведение добавлено");
    }
    
    removeBook(title){
        const allWorks = [];
        let book;
        let removeIndex;
        for (book of this.#books){
            allWorks.push(book.work);
        };
        if (allWorks.includes(title)) {
            for (book of this.#books){
                if (book.work === title) {
                    removeIndex = this.#books.indexOf({author: `${book.author}`, work: `${title}`});
                    this.#books.pop(removeIndex);
                    console.log('Книга с указанным названием удалена');
                    return;
                }
            }
        }
            console.log('Книга с указанным названием не числится')
                return;
            }
            
    hasBook(title) {
                const allWorks = [];
                let book;
                for (book of this.#books){
                    if (book.work === title) {
                        return true;
                    }
                }
                return false;
            }
}

const firstLibrary = new Library(newBooks);
firstLibrary.showAllBooks();
firstLibrary.addBook({author: 'Mihail Sholohov', work:'Tihiy Don'});
console.log("××××××после добавления×××××××")
firstLibrary.addBook({author:'Mihail Sholohov',work: 'Tihiy Don'});
firstLibrary.showAllBooks();
firstLibrary.removeBook('Tihiy Don');
firstLibrary.showAllBooks();
console.log(firstLibrary.hasBook('Molodaya Gvardia'));
const dublicatBooks = [{author: "A", work: "Aa"}, {author: "A", work: "Aa"}]
const dublicatLibrary = new Library(dublicatBooks);