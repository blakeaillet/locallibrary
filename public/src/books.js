function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => book.borrows[0].returned === false)
  let returnedBooks =  books.filter((book) => book.borrows.every(borrow => borrow.returned === true));
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let accountsArray = [];

  for (let account of accounts) {
    if (accountsArray.length > 9) {
      break;
    }
  for (let i = 0; i < book.borrows.length; i++) {
    let { id, returned, picture, age, name, company, email, registered} = account;
    returned = book.borrows[i].returned;
    if (account.id === book.borrows[i].id) {
      accountsArray.push({id, returned, picture, age, name, company, email, registered})
    }
   }
  }
  return accountsArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
