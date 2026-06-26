const books = [];

const getBook = id => {
  return books.find(book => book.id == id);
};

const addBook = (name, publishedYear, genre, author, imageUrl, isAvailable) => {
const id = books.length > 0
  ? Math.max(...books.map(b => b.id)) + 1
  : 1;
  const book = {
    id,
    name,
    publishedYear,
    genre,
    author,
    imageUrl: imageUrl || './src/assets/images/no-image.png',
    isAvailable,
  };
  books.unshift(book);
};

const lendOrReturnBook = id => {
  const book = getBook(id);
  book.isAvailable = !book.isAvailable;
};

const groupBooks = (groupSelection) => {
  const groupedBooks = books.reduce((grouped, book) => {
    let key = book[groupSelection];
    if (groupSelection == 'none') key = 'All Books';
    if (groupSelection == 'isAvailable')
      key = key ? 'Available' : 'Unavailable';
    grouped[key] = grouped[key] || [];
    grouped[key].push(book);
    return grouped;
  }, {});

  return groupedBooks;
};

async function fetchBooks() {
  const response = await fetch("http://127.0.0.1:8000/books");
  const data = await response.json();

  books.length = 0;

  data.forEach((b, index) => {
    books.push({
      id: index + 1,
      name: b["Name"],
      publishedYear: b["Published Year"],
      genre: b["Genre"],
      author: b["Author"],
      imageUrl: "./src/assets/images/no-image.png",
      isAvailable: true
    });
  });

  console.log(books[0]);
}
// const load = booksCSVData => {
//   booksCSVData
//     .split('\n')
//     .slice(1)
//     .filter(line => line)
//     .forEach((line, index) => {
//       const [name, publishedYear, genre, author, imageUrl] = line.split(',');
//       addBook(name, publishedYear, genre, author, imageUrl, index % 2 == 0);
//     });
// };
