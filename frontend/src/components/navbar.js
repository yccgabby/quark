import React from 'react';
import img from "./images/masculine.png"; 
import {Link} from 'react-router-dom'

class MyNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-light" style={navStyle}> 
                <a className="navbar-brand" href="/" style={wordStyle}>
                    <img src={img} width="40" height="40" className="d-inline-block align-center" alt=""></img>quark
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" id='bs-example-navbar-collapse'>
                        <li className="nav-item active">
                            <Link to="/" style={navItemWordStyle} className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/upload" style={navItemWordStyle} className='nav-link'>Upload</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const navStyle = {
    backgroundColor: '#252627',
    padding: '5px',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
}

const navItemWordStyle = {
    color: '#e0503f',
    fontSize: 20,
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
}

const wordStyle = {
    color: '#e0503f',
    fontSize: 40,
    marginLeft: 20,
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
}

export default MyNavBar;