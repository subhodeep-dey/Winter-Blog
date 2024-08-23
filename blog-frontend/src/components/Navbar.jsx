import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import SearchBox from './SearchBox';
import Logo from './Logo';
import LanguageDropdown from './LanguageDropdown';

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <SearchBox />
            </div>
            <div className="nav-center">
                <Logo />
            </div>
            <div className="nav-right">
                <LanguageDropdown />
            </div>
        </nav>
    );
};

export default NavBar;