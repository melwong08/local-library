function findAuthorById(authors, id) {
  for (const num in authors){
    if (id === authors[num].id) return authors[num];
  }
}

function findBookById(books, id) {
  //returns book object with matching id
  for (const num in books){
    if (books[num].id === id) return books[num];
  }
}

function partitionBooksByBorrowedStatus(books) {
  /*----------------------instructions------------------------------It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains book objects that represent the books _that are currently checked out_, while the second array contains book objects that represent the books _that have been returned._ You can check for the return status by looking at the first transaction object in the `borrows` array.*/

  //use reduce to create two arrays and push information into each depending on status of borrows[0]
   return books.reduce((acc, current) => { acc[+(current.borrows[0] && current.borrows[0].returned)].push(current); return acc }, [[],[]] )
}

function getBorrowersForBook(book, accounts) {
  //-----------------------instructions-----------------------------It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.----------------------------------------------------
 //console.log(book, accounts)

  //map --> find --> conditional statement 
  let results = book.borrows.map(borrow => {
   let acnt = accounts.find(account => account.id === borrow.id)
   acnt["returned"] = borrow.returned;
    return acnt;
  })
    if (results.length > 10){
      return results.slice(0, 10)
    }
  return results;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
