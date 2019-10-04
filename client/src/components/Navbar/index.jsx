import React from 'react';
import './index.css';   

export default function Navbar(props) {
    return (
        <div className="navbar mb-2 justify-content-between">
            <div className="navbar-brand">Google Books</div>
            <div>
                <a href='/' id="searchLink" className="btn btn-light m-2">Search Page</a>
                <a href='/favorites' id='faveLink' className="btn btn-light m-2">Favorites</a>
            </div>
        </div>
    )
}
