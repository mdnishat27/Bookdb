import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo" style={{ marginLeft: 20 }}>
                        Book Finder
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/profile.html">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
