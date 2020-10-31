import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            
            <Link className="tags" to="/home" style={{textDecoration: 'none'}}>Home</Link>
            <Link className="tags" to="/search" style={{textDecoration:'none'}}>Search</Link>
        </div>
    );
};

export default Nav;