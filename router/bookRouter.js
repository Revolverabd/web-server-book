const { Router } = require('express');
const { bookGet, bookPost, bookPut, bookDelete, bookGetForIsbn, bookPatch } = require('../controller/bookController');

const bookRouter = Router();

bookRouter.get('/bookGet', bookGet);
bookRouter.get('/bookGetForIsbn/:isbn', bookGetForIsbn);
bookRouter.post('/bookPost', bookPost);
bookRouter.put('/bookPut/:_id', bookPut);
bookRouter.patch('/bookPatch/:_id', bookPatch);
bookRouter.delete('/bookDelete/:_id', bookDelete);


module.exports = bookRouter;