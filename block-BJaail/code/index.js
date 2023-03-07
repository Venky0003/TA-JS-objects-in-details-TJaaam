class BookList {
  constructor(root, list = []) {
    this.books = list;
    this.root = root;
  }
  add(book, author, isbn) {
    let listOfBooks = new Book(book, author, isbn);
    this.books.push(listOfBooks);
    this.createUI();
    return this.books.length;
  }
  handleDelete(isbn) {
    let index = this.books.findIndex((book) => book.isbn === isbn);
    this.books.splice(index, 1);
    this.createUI();
    return this.books.length;
  }
  createUI() {
    this.root.innerHTML = "";
    this.books.forEach((book) => {
      let ui = book.createUI();
      ui.querySelector(".dlt-btn").addEventListener(
        "click",
        this.handleDelete.bind(this, book.isbn)
      );
      this.root.append(ui);
    });
  }
}

class Book {
  constructor(book, author, isbn) {
    this.book = book;
    this.author = author;
    this.isbn = isbn;
    this.isRead = false;
  }
  handleCheck() {
    this.isRead = !this.isRead;
    this.createUI();
  }
  createUI() {
    let tr = document.createElement("tr");
    tr.classList.add("tr")

    let tdBook = document.createElement("td");
    tdBook.innerText = this.book;

    let tdAuthor = document.createElement("td");
    tdAuthor.innerText = this.author;

    let tdIsbn = document.createElement("td");
    tdIsbn.innerText = this.isbn;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.isRead;
    input.addEventListener("click", this.handleCheck.bind(this));

    let tdDelete = document.createElement("td");
    tdDelete.classList.add("dlt-btn");
    tdDelete.innerText = "❌";

    tr.append(tdBook, tdAuthor, tdIsbn, input, tdDelete);

    return tr;
  }
}

let myBooks = new BookList(document.querySelector(".book-list"));

let addButton = document.getElementById("add-btn");
let bookInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let isbnInput = document.getElementById("isbn");
let tableBody = document.getElementById("book-lists");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  let book = bookInput.value.trim();
  let author = authorInput.value.trim();
  let isbn = isbnInput.value.trim();
  if (book && author && isbn) {
    myBooks.add(book, author, isbn);
    bookInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
  }
});
