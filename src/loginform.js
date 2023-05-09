/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from './BG.png';
import './loginform.css';


const LoginForm = () => {

    const [showPopup] = React.useState({display: 'none'});
    const [showLogin] = React.useState({display: 'block'});

    const popup = () => {
        showPopup({display: 'block'});
        showLogin({display: 'none'});
        setTimeout(() => {
            showPopup({display: 'none'});
            showLogin({display: 'block'});
        }, 3000);
    }


    return (
        <div className='cover'>
            <div className='content'>
               <form action="post" className='content'>
               <h1>Sign in</h1>
                <h4>Sign in and start managing your candidates</h4>
                <input className='input' type='email' name='email' placeholder='Login' required/>
                <input className='input' type='password' name='password' placeholder='Password' required/>

                <div className='forgot'>
                <div className='div'>
                    <div className='meorediv'>
                    <input id='check' type='checkbox'></input>
                        <label htmlFor='check'>Remember me</label>
                    </div>
                    <a>Forgot password?</a>
                </div>
                </div>
                
                <button type="submit" className='login-btn' onClick={popup}>Login</button>
                
               </form>
            </div>
            <img src={logo} alt=''/>
        </div>
    )
}

export default LoginForm;