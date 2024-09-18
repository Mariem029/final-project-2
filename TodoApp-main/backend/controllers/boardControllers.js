const Board = require('../modules/Board')

// Create a new board
exports.createBoard = async (req, res) => {
    const { name, createdBy, isActive, columns } = req.body;
  
    try {
      const board = new Board({ name, createdBy, isActive, columns });
      await board.save();
      res.status(201).json(board);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create board' });
    }
  };

  // Get all Boards for a user
exports.getBoards = async (req, res) => {
    const userName = req.params.userName;

    try {
      const boards = await Board.find({ createdBy: userName });
      
      res.json(boards);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve boards' });
    }
  };

 // update a board
exports.updateBoard = async (req, res) => {
    const { id } = req.params;
    const { name,createdBy, isActive, columns } = req.body;
 
    try {
      const board = await Board.findByIdAndUpdate(id,{name,createdBy,isActive,columns});
  
      if (!board) {
        return res.status(404).json({ error: 'Board not found' });
      }
  console.log(board)
      res.json(board,{ message: 'Board updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update board' });
    }
  };  

  // Delete a board
exports.deleteBoard = async (req, res) => {
    const { id } = req.params;
 
    try {
      const board = await Board.findByIdAndDelete(id);
  
      if (!board) {
        return res.status(404).json({ error: 'Board not found' });
      }
  
      res.json({ message: 'Board deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete board' });
    }
  };