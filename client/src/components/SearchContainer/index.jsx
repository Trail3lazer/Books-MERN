import React from 'react';
import './index.css';   

export default function SearchContainer(props) {
    return (
        <div className="search jumbotron d-flex align-items-center justify-content-left">
            {props.children}
        </div>
    )
}
