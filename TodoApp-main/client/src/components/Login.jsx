import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setInfo } from '../redux/Slices/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add your login logic here
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {email,password} )
            console.log(response)
            dispatch(setInfo(response.data))
            navigate('/home')
        } catch (error) {
            console.log(error)
            setLoginError(error.response.data)
        }
    };
   

    return (
        <div className='authPage'>
             {loginError && <div> 
                <h3 className='text-red-700'>
                    {loginError.error}
                </h3>
            </div>}
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className='btn' type="submit">Login</button>
            </form>
            <div className='absolute top-5 right-5'>
                <p >Dont have an account ?</p>
                <button className='btn' onClick={() =>navigate('/register') }> Register</button>
            </div>
        </div>
    );
};

export default Login;