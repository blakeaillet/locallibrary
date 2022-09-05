function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((account1, account2) =>
    account1.name.last > account2.name.last ? 1 : -1
  );
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  const accountId = account.id;
  books.forEach((book) =>
    book.borrows.forEach((borrow) =>
      borrow.id === accountId ? result++ : (result += 0)
    )
  );
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let bookArray = [];
  books.forEach((book) => {
    if (!book.borrows[0].returned && book.borrows[0].id === account.id) {
     let { id, title, genre, authorId, author, borrows } = book;
     author = authors.find((author) => author.id === book.authorId);
     bookArray.push({id, title, genre, authorId, author, borrows});
    }
  })
  return bookArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
