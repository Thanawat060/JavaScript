const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

let qbook = JSON.parse(bookJSON);
console.log(qbook.title);