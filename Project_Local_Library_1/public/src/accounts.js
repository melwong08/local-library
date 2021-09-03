function findAccountById(accounts, id) {
  for (const num in accounts){
    if (id === accounts[num].id) return accounts[num];
  }
}

function sortAccountsByLastName(accounts) {
  //----------------------instructions------------------------------It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.-------------------//

  return accounts.sort((lastNameA, lastNameB)=> lastNameA.name.last.localeCompare(lastNameB.name.last));
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  for (let num in books){
    let borrow = books[num].borrows;
    for (let num2 in borrow) {
      if (account.id === borrow[num2].id) count += 1;
    }
  }
  return count;
}

function addAuthorObject(books, authors){
  //loop through books array
  for (let num in books){
    let bookID = books[num].authorId
    //loop through authors array
    for (let name in authors){
      //add author into the books array
      if (bookID === authors[name].id) 
        books[num]["author"] = authors[name];
      } 
    } 
  return books;
}

function getBooksPossessedByAccount(account, books, authors) {
  //-----------------------instructions----------------------------It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.------------//
  //filter the books array to include only the books that are checked out by the given account id - borrows.returns === false 
 //push the author information into the book item object using helper function
  
  addAuthorObject(books, authors);
  let posess = books.filter(book => {
   return book.borrows.some(borrow => account.id === borrow.id && borrow.returned === false)});
  console.log(posess);
  return posess;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
