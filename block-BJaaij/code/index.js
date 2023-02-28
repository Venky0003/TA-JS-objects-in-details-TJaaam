class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsread() {
    if (this.isRead) {
      return false;
    }
    this.isRead = true;
    this.finishedDate = Date.now();

    return true;
  }
}

class BookList {
    constructor(){
        this.books = [];
        this.currentBookIndex = 0;
    }
    add(book){
        return this.books.push(book);
    }
    getCurrentBook(){
        return this.books[this.currentBookIndex]
    }
    getNextBook(){
        return this.books[this.currentBookIndex + 1]
    }
    getPreviousBook(){
        return this.books[this.currentBookIndex - 1]
    }
    changeCurrentBook(current){
         return this.currentBookIndex = current;
    }
}


let book1 = new Book("Who Says You Can't ? You Do","self-help","Daniel Chidiac");
let book2 = new Book("And Then There Were None","Mystery","Agatha Christie");
let book3 = new Book("The Godfather","Crime"," Mario Puzo");
let book4 = new Book("The Hobbit","Fantasy"," JRR Tolkien");
let book5 = new Book("A Tale Of Two Cities","Historical Fiction","Charles Dickens");

// console.log(book1.markBookAsread())

let bookList = new BookList();
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);

console.log(book1); 
book1.markBookAsread();
console.log(book1.finishedDate); 

let finishedDateBook1 = new Date(book1.finishedDate);
console.log(finishedDateBook1.toLocaleString());
console.log(book1);
console.log(bookList.getCurrentBook());

console.log(book2); 

console.log(bookList.getNextBook()); 
console.log(bookList.getPreviousBook()); 
bookList.changeCurrentBook(1);
console.log(bookList.getCurrentBook());

book2.markBookAsread();

console.log(bookList.getNextBook()); 
console.log(bookList.getPreviousBook()); 