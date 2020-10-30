import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            
            <Link className="tags" to="/home">Home</Link>
            <Link className="tags" to="/search">Search</Link>
        </div>
    );
};

export default Nav;