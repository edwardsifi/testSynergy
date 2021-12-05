import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
    useEffect(() => {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {});
    }, [])

    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">Movies</NavLink>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink to="/collections">Collections</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/collections">Collections</NavLink>
                </li>
            </ul>

        </header>


    )
}

export default Navbar;