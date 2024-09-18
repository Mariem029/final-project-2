// src/components/LogoutButton.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import {Logout} from "../redux/Slices/authSlice"
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch= useDispatch()
  const navigate=useNavigate()
  const logout = () => {
   dispatch(Logout())
   navigate("/login")
  };

  return <button className='btn' onClick={()=>logout()}>Log Out</button>;
};

export default LogoutButton;