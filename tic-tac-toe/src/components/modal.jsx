import { Link } from 'react-router-dom';
import React from 'react';

export const SignUp = ({ state }) => {
    const hideCard = (e) => {
        e.preventDefault;
        state(null);
    }
    const changeCard = (e) => {
        e.preventDefault;
        state('SignIn');
    }
    return (
        <div className='fixed h-[100vh] w-[100vw] top-0 left-0 backdrop-blur-sm' id='sign-up-card'>
            <div className="w-[500px] h-[500px] flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white text-orange-500 rounded-2xl z-90 shadow-lg">
                <span className='cursor-pointer absolute top-10 right-10 text-4xl font-bold' onClick={hideCard}>X</span>
                <h2 className='text-6xl font-bold self-center mt-10'>Sign Up</h2>
                <form action="" method="post" className='self-center flex flex-col w-[100%] h-fit items-center justify-center mt-20'>
                    <input type="email" name="email" id="email" className='form-inputs' placeholder='Email' />
                    <input type="text" name="uname" id="uname" className='form-inputs' placeholder='Username' />
                    <input type="password" name="passwd" id="passwd" className='form-inputs' placeholder='Password' />
                    <input type="password" name="cpasswd" id="cpasswd" className='form-inputs' placeholder='Confirm Password' />
                    <input type="button" value="SIGN UP" className='rounded-md w-[80%] bg-orange-500 h-10 mt-10 text-white font-bold text-lg p-2 text-center hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500' />
                    <button className="btn block p-4 rounded-sm mb-2 self-center w-[80%] text-left" onClick={changeCard}>Already have an account?</button>
                </form>
            </div>
        </div>
    )
}


export const SignIn = ({ state }) => {
    const hideCard = (e) => {
        e.preventDefault;
        state(null);
    }
    const changeCard = (e) => {
        e.preventDefault;
        state('SignUp');
    }
    return (
        <div className='fixed h-[100vh] w-[100vw] top-0 left-0 backdrop-blur-sm' id='sign-in-card'>
            <div className="w-[500px] h-[500px] flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white text-orange-500 rounded-2xl z-90 shadow-lg">
                <span className='cursor-pointer absolute top-10 right-10 text-4xl font-bold' onClick={hideCard}>X</span>
                <h2 className='text-6xl font-bold self-center mt-10'>Login</h2>
                <form action="" method="post" className='self-center flex flex-col w-[100%] h-fit items-center justify-center mt-20'>
                    <input type="text" name="uname-email" id="uname-email" className='form-inputs p-2 block rounded-tl-lg rounded-tr-lg bg-slate-300' placeholder='Email / Username' />
                    <input type="password" name="passwd" id="passwd" className='form-inputs p-2 block rounded-bl-lg rounded-br-lg bg-slate-300' placeholder='Password' />
                    <input type="button" value="LOG IN" className='rounded-md w-[80%] bg-orange-500 h-10 mt-10 text-white font-bold text-lg p-2 text-center hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500' />
                    <button className="btn block p-4 rounded-sm mb-2 self-center w-[80%] text-left" onClick={changeCard}>Don't have an account?</button>
                </form>
            </div>
        </div>
    )
}