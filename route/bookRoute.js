const { Router } = require('express');
const { bookGet, bookPost, bookPut, bookDelete, bookGetForIsbn, bookPatch } = require('../controller/bookController');

const router = Router();

router.get('/', bookGet);
router.get('/isbn', bookGetForIsbn);
router.post('/', bookPost);
router.put('/:_id', bookPut);
router.patch('/:_id', bookPatch);
router.delete('/:_id', bookDelete);


module.exports = router;