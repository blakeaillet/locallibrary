function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  const booksBorrowed = books.forEach(book => {
  if (book.borrows[0].returned === false) {result += 1};
  });
  return result;
}

function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
		acc[book.genre] != null
			? acc[book.genre].count++
			: acc[book.genre] = { name: book.genre, count: 1 }
		return acc
	}, {})
	return Object.keys(genres)
		.map(genre => genres[genre])
		.sort((alpha,beta) => beta.count - alpha.count)
		.slice(0,5)
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  return sortByCount(result)
    .filter((item, i) => i < 5)
}
//helper function
function sortByCount(array) {
return array.sort((alpha, beta) => beta.count - alpha.count)
}

function getMostPopularAuthors(books, authors) {
  //establish empty array to recieve result
   let authorsResult = [];

  //find the top author by matching the id, and further - the most borrowed book, by using borrows.length
  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
     popularAuthor.forEach((book) => {
       
       //the author match 
      let author = authors.find((author) => author.id === book.authorId);
      
       //push the full name and count to the result array 
      authorsResult.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });

  //return in one whole line - the sort based on count and then splice the top 5
  return (authorsResult.sort((countA, countB) => countA.count < countB.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
