import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Bolg</a>
            </div>
        </nav>
);
}

export default Navbar;
