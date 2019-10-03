import React from 'react';
import './index.css';   

export default function Hero(props) {
    return (
        <div className="jumbotron d-flex align-items-center justify-content-between">
            {props.children}
            <div>
                <a href='/' id="searchLink" className="btn btn-light m-2">Search Page</a>
                <a href='/favorites' id='faveLink' className="btn btn-light m-2">Favorites</a>
            </div>
        </div>
    )
}
