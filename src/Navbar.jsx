import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import logo from '/bookstack.png';
// <img src={logo} alt='Pic'/>

function Navbar() {
    return (
        <>
        <nav className="nav">
            <Link to="/" className="site-title">BookSite</Link>
            <ul>
                <CustomLink to="/Library">Library</CustomLink>
                <CustomLink to="/Blog">Blog</CustomLink>
                <CustomLink to="/MyList">MyList</CustomLink>
            </ul>
        </nav>
        </>
    );
}

function CustomLink({ to, children }) {
    //Pages shown as active
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( {path: resolvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    );
}

export default Navbar;
