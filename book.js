const myLibrary = [];
let booksContainer = document.querySelector("#books-container");
let addBookButton = document.querySelector("#add-book");

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook();
}

function displayBook() {
    booksContainer.innerHTML = '';
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.className = "book-card";

        let bookTitle = document.createElement("p");
        let bookAuthor = document.createElement("p");
        let bookPagesRead = document.createElement("p");
        let bookRead = document.createElement("p");
        let removeButton = document.createElement("button");

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPagesRead);
        bookCard.appendChild(bookRead);

        bookTitle.textContent = book.title;
        adjustTitleFont(bookTitle);
        bookAuthor.textContent = "By: " + book.author;
        bookPagesRead.textContent = "Pages: " + book.pages;
        bookRead.textContent = "Status: " + book.read;

        removeButton.className = "remove-button";
        removeButton.textContent = "Delete";
        bookCard.appendChild(removeButton);

        booksContainer.appendChild(bookCard);
    });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");
addBookToLibrary("1984", "George Orwell", 328, "Not Read");
addBookToLibrary("The Red Pyramid", "Rick Riordan", 403, "Reading");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "Read");
addBookToLibrary("Dune", "Frank Herbert", 412, "Not Read");
addBookToLibrary("The Hunger Games", "Suzanne Collins", 374, "Read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 234, "Reading");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Not Read");


function adjustTitleFont(bookTitleElement) {
    const maxLength = 10; // max characters before shrinking
    if (bookTitleElement.textContent.length > maxLength) {
        bookTitleElement.style.fontSize = "1rem";
    } else {
        bookTitleElement.style.fontSize = "1.4rem";
    }
}

const numStars = 100;
const pastelColors = [
    'rgba(255, 179, 186, 0.8)', // pink
    'rgba(255, 223, 186, 0.8)', // peach
    'rgba(255, 255, 186, 0.8)', // yellow
    'rgba(186, 255, 201, 0.8)', // mint
    'rgba(186, 225, 255, 0.8)', // light blue
    'rgba(201, 186, 255, 0.8)'  // lavender
];

const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.textContent = '✧';
    star.style.position = 'absolute';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.fontSize = Math.random() * 20 + 10 + 'px';
    star.style.color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    star.style.pointerEvents = 'none';
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`; // random duration between 2-5s
    star.style.animationDelay = `${Math.random() * 5}s`; // random start time
    document.body.appendChild(star);
}
