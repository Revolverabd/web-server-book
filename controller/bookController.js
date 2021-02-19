const { createBook, getListBooks, listBookByIsbn, updateBookById, deleteBookByid, bookPatchById } = require('../service/bookService');

const bookPost = async (req, res) => {
    try {
        const body = req.body;
        const bookInserted = await createBook(body);

        res.json({
            bookInserted
        });
    }
    catch (error) {
        throw new Error(error);
    }
}

const bookGet = async (req, res) => {
    try {
        const listBooks = await getListBooks();

        res.json({
            listBooks
        });
    }
    catch (error) {
        throw new Error(error);
    }
}

const bookGetForIsbn = async (req, res) => {
    try {
        const { isbn } = req.params;
        const book = await listBookByIsbn(isbn);

        res.json({
            book
        });
    }
    catch (error) {
        throw new Error(error);
    }
}

const bookPut = async (req, res) => {
    try {
        const id = req.params;
        const body = req.body;

        const result = await updateBookById(id, body);

        res.json({
            result
        });
    }
    catch (error) {
        throw new Error(error);
    }
}
const bookPatch = async (req, res) => {
    try {
        const id = req.params;
        const body = req.body;

        const bookPatched = await bookPatchById(id, body);

        res.json({
            bookPatched
        });
    }
    catch (error) {
        throw new Error(error);
    }
}

const bookDelete = async (req, res) => {
    try {
        const id = req.params;
        const book = await deleteBookByid(id);

        res.json({
            book
        });
    }
    catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    bookGet,
    bookPost,
    bookPut,
    bookPatch,
    bookGetForIsbn,
    bookDelete
}