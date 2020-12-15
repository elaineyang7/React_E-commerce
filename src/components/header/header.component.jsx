import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/lamb.svg'

import './header.styles.scss';

const Header = ( { currentUser }) => (
    <div className='header'>
        <Link className='logo-containter' to="/">
            <Logo className='logo' width="70px" height="70px" />
        </Link>
        <Link className="header-title" to="/">
            Lamb Handmade
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}> 
                        SIGN OUT 
                    </div>
                ): (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )}
        </div>
    </div>
);

export default Header;