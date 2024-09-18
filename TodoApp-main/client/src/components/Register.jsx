import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '../redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [registerError, setRegisterError] = useState(null);
    const navigate = useNavigate()
    //const {user} =useSelector(state=>state.auth)

    const handleSubmit = async(e) => {
        e.preventDefault();
try {
    console.log({name,email,password})
    const response = await axios.post('http://localhost:5000/api/users/register', {name,email,password} )
    console.log(response)

    navigate('/login')
   // console.log(user)
} catch (error) {
    console.log(error)
    setRegisterError(error.response.data ||error.respoonse) 
}
    }

    return (
        <div className = "authPage flex flex-col">
        {registerError && <div> 
                <h3 className='text-red-700'>
                    {registerError.error}
                </h3>
            </div>}

            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Your name" />

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**" id="password" name="password" />

                <button type="submit" className='btn'>Register</button>
            </form>
            <div className='flex flex-col absolute top-5 right-5'>
                <p>Already have an account ?</p>
                <button className="btn" onClick={()=>navigate('/login')}>
                    Login
                </button>
            </div>

        </div>
    );
};