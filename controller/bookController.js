const { response, request } = require('express');
const { createBook, getListBooks, listBookByIsbn, updateBookById, deleteBookByid, bookPatchById } = require('../service/bookService');

const bookPost = async (req, res = response) => {

    const body = req.body;
    const bookInserted = await createBook(body);

    res.json({
        bookInserted
    });
}

const bookGet = async (req = request, res = response) => {

    const listBooks = await getListBooks();

    res.json({
        listBooks
    });
}

const bookGetForIsbn = async (req = request, res = response) => {

    const { isbn } = req.query;
    const book = await listBookByIsbn(isbn);

    res.json({
        book
    });
}

const bookPut = async (req, res = response) => {

    const id = req.params;
    const body = req.body;

    const result = await updateBookById(id, body);

    res.json({
        result
    });
}
const bookPatch = async (req, res = response) => {

    const id = req.params;
    const body = req.body;

    const bookPatched = await bookPatchById(id, body);

    res.json({
        bookPatched
    });
}

const bookDelete = async (req, res = response) => {

    const id = req.params;
    const book = await deleteBookByid(id);

    res.json({
        book
    });

}

module.exports = {
    bookGet,
    bookPost,
    bookPut,
    bookPatch,
    bookGetForIsbn,
    bookDelete
}