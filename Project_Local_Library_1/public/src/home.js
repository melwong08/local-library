function getTotalBooksCount(books) {
  let count = 0;
  for(const num in books){
    count += 1;
  }
  return count;
}

function getTotalAccountsCount(accounts) {
  let count = 0;
  for (const num in accounts){
    count += 1;
  }
  return count;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  for (const num in books){
    let book = books[num];
    for (const num2 in book){
      let book2 = book[num2];
      for (const num3 in book2){
         if (book2[num3].returned === false) count += 1;
      }
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  //------------------------instructions----------------------------It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.--------------------------------------------------------------
  
  let bookGenres = books.map(book => book.genre);
  let temp = [];
  bookGenres.map(genre => {
    let location = temp.findIndex(element => element.name === genre);
    if (location >= 0) {
      temp[location].count += 1;
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
    temp.sort((genre1, genre2) => genre2.count - genre1.count);
    return temp.length > 5 ? temp.slice(0, 5) : temp;                 
}

function getMostPopularBooks(books) {
  //-----------------------instructions----------------------------It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.-----------------------
  //reduce the object down into an array with the name of the book and count of how many times each was borrowed
  //sort the items in the array by popularity
//   stop the number of outputs at 5 - slice
  
  const popBooks = books.map(book => ({name:book.title, count: book.borrows.length}))
  popBooks.sort((book1, book2) => book2.count - book1.count);
  return popBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
//-------------------------instructions----------------------------It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.-----------------------------------------------------------
//reduce the object down to an array with the name of the author and a count of how many times their books have been checked out
//sort the items by count
//slice after first 5 outputs

  const popAuthors = books.map(book => ({name: book.author.name.first + " " + book.author.name.last, count: book.borrows.length}))
  popAuthors.sort((author1, author2) => author2.count - author1.count);
  return popAuthors.slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
