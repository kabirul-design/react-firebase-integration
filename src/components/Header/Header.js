import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, handleSignOut} = useFirebase();
    return (
        <div className='header'>
            <h2>Logo</h2>
            <nav className=''>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/order">Order</Link>
            <Link to="/register">Register</Link>
            <span style={{color: 'goldenrod'}}>{user?.displayName && user.displayName}</span>
            { user?.uid ? 
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <Link to="/login">Login</Link>
            }
            </nav>
        </div>
    );
};

export default Header;