import React from 'react';
import Link from '../components/Link';
import NavBar from '../components/NavBar';
import './Header.scss';

function Header() {
    return (<header id="header" className="header fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
            <Link href="/" className="logo">
                <img src="/ja-128.png" alt="Jira Assistant Logo" />
                <h1>Jira Assistant</h1>
            </Link>
            <NavBar />
            <Link href="/donate" className="btn-donate">Donate now</Link>
        </div>
    </header>)
}

export default Header;