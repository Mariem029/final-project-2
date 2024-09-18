import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import EmptyBoard from './components/EmptyBoard';
import boardsSlice from "./redux/Slices/boardsSlice";
import { Register } from "./components/Register";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";


function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  const dispatch = useDispatch();
   const boards = useSelector((state) => state.boards); 
  const activeBoard = boards.find((board) => board.isActive);
  const navigate = useNavigate()

  const user = localStorage.getItem('User');

useEffect(()=>{
  navigate('/home')
},[user])

/*   if (!activeBoard && boards.length > 0)
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 })); */
  return (
    <div className=" overflow-hidden  overflow-x-scroll">
      
      <Routes>
        <Route index path="/*" element={user ? <Navigate to="/home" /> : <Navigate to='/login' /> } />
        <Route path="/home" element={user /* && boards.length > 0  */? 
        <>
          <Header
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
          />
          <Home setIsBoardModalOpen={setIsBoardModalOpen}
              isBoardModalOpen={isBoardModalOpen} />
        </>       : <Navigate to='/login' />} />

        <Route path="/login" element={user ? <Navigate  to="/home"/> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
 
    </div>
  );
}




   


export default App;
