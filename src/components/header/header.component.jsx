import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/lamb.svg'

import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-containter' to="/">
            <Logo className='logo' width="70px" height="70px" />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;