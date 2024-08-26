import React, { useState } from 'react'
import { SignIn, SignUp } from './modal';

function Header() {
    const [active, setActive] = useState(null);
    const openSignUpCard = () => {
        setActive('SignUp');
    }

    const openSignInCard = () => {
        setActive('SignIn');
    }

    return (
        <div className='text-orange-400 cursor-pointer flex w-[400px] justify-around mb-2 m-auto'>
            <span id='sign-up' className='bg-black p-3 ' onClick={openSignUpCard}>Sign Up</span>

            <span id='sign-in' className='bg-white text-black p-3 ' onClick={openSignInCard}> Sign In</span>
            {active === 'SignUp' && <SignUp state={setActive} />}
            {active === 'SignIn' && <SignIn state={setActive} />}
        </div>
    )
}

export default Header;