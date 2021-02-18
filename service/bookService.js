const Book = require('../model/book');
const { saveBookInDb, getAllBooks, getBookByIsbn, updateBook, bookDelete, patchBookById } = require('../facade/BookFacade');


const createBook = async (body) => {
    try {
        const book = new Book(body);
        const bookInserted = await saveBookInDb(book);
        return bookInserted;
    }
    catch (error) {
        throw error;
    }
}

const getListBooks = async () => {
    try {
        const listBooks = await getAllBooks(Book);
        return listBooks;
    }
    catch (error) {
        throw error;
    }
}

const listBookByIsbn = async (isbn) => {
    try {
        const book = await getBookByIsbn(Book, isbn);
        return book;
    }
    catch (error) {
        console.log(error);
    }
}

const updateBookById = async (id, body) => {
    try {
        const bookUpdated = await updateBook(Book, id, body);
        return bookUpdated;
    }
    catch (error) {
        throw error;
    }
}

const bookPatchById = async (id, body) => {
    try {
        const bookPatched = await patchBookById(Book, id, body);
        return bookPatched;
    }
    catch (error) {
        throw error;
    }
}

const deleteBookByid = async (id) => {
    try {
        const bookDeleted = await bookDelete(Book, id);
        return bookDeleted
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    createBook,
    getListBooks,
    listBookByIsbn,
    updateBookById,
    deleteBookByid,
    bookPatchById

}