import React from 'react';

import { Link } from 'react-router-dom';

import './nav.css';

class NavBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="">
                <Link className="link" to="/login">
                    Login
                </Link>
                <Link className="link" to="/register">
                    Register
                </Link>
            </div>
        );
    }
};

export default NavBar;