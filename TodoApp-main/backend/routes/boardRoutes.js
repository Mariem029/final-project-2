const express = require('express');
const { createBoard, getBoards, updateBoard } = require('../controllers/boardControllers');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/', createBoard);
router.get('/:userName', getBoards);
router.put('/:id', updateBoard);


module.exports = router;

