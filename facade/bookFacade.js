
const saveBookInDb = async (book) => {

    try {
        const bookSaved = await book.save();
        return bookSaved;
    }
    catch (error) {
        throw new Error(error);
    }

}

const getAllBooks = async (Book) => {

    try {
        const listBooks = await Book.find();
        return listBooks;
    }
    catch (error) {
        throw new Error(error);
    }

}

const getBookByIsbn = async (Book, isbn) => {

    try {
        const book = await Book.find({ isbn: isbn });
        return book;
    }
    catch (error) {
        throw new Error(error);
    }
}

const updateBook = async (Book, id, body) => {

    try {
        const bookUpdated = Book.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        return bookUpdated;
    } catch (error) {
        throw new Error(error);
    }

}

const patchBookById = async (Book, id, body) => {

    try {
        const bookPatched = Book.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        return bookPatched;
    } catch (error) {
        throw new Error(error);
    }

}

const bookDelete = async (Book, id) => {

    try {
        const book = await Book.findByIdAndDelete(id);
        return book;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    saveBookInDb,
    getAllBooks,
    updateBook,
    patchBookById,
    bookDelete,
    getBookByIsbn
};