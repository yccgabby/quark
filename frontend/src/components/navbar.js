import React from 'react';
import img from "./images/button.png"; 
import {Link} from 'react-router-dom'

class MyNavBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg sticky-top navbar-light" style={navStyle}>
                <a class="navbar-brand" href="#" style={wordStyle}>
                    <img src={img} width="60" height="60" class="d-inline-block align-top" alt=""></img>quark
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav" id='bs-example-navbar-collapse-2'>
                        <li class="nav-item active">
                            <Link to="/" style={navItemWordStyle}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/upload" style={navItemWordStyle}>Upload</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const navStyle = {
    backgroundColor: '#ecd6c7',
    padding: '5px'
}

const navItemWordStyle = {
    color: '#ff734f',
    fontSize: 20
}

const wordStyle = {
    color: '#ff734f',
    fontSize: 40,
    marginLeft: 20
}

export default MyNavBar;