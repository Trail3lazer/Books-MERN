import React from 'react';
import './index.css'

export default function index(props) {
    return (
        <ul className="list-group">
            {props.searchResults.map((book)=>{


                return <li className="list-group-item list-group-flush" key={book.id}>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/> <br/>
                    <strong>{book.volumeInfo.title}</strong> <br />
                    By: {book.volumeInfo.authors} <br/>
                    <a href={book.volumeInfo.previewLink}>Preview</a>
                    <a className="text-warning float-right" href="/favorites"
                    onClick={props.saved.push(book)}>Favorite</a>
                </li>
            }) }
        </ul>
    )
}
