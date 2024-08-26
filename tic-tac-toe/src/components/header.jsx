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
        <div className='text-orange-400 cursor-pointer absolute left-10 top-10'>
            <span id='sign-up' onClick={openSignUpCard}>Sign Up</span>
            <span> | </span>
            <span id='sign-in' onClick={openSignInCard}> Sign In</span>
            {active === 'SignUp' && <SignUp state={setActive} />}
            {active === 'SignIn' && <SignIn state={setActive} />}
        </div>
    )
}

export default Header;