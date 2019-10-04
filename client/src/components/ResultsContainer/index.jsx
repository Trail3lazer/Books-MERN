import React from 'react';
import { Link } from 'react-router-dom'
import SkeletonList from '../../components/SkeletonList';
import './index.css'

export default function ResultsContainer(props) {
    console.log(props.results)
    return (
        <ul className="list-group">
            {props.results.length !== 0 ? props.results.map((book) => {

                return <li className="list-group-item list-group-flush" key={book.id}>

                    <a href={book.volumeInfo.previewLink} className="float-right p-2">Preview</a>
                    <Link className="text-warning float-right p-2" to="/favorites"
                        onClick={() => props.db.post(book)}>Favorite</Link>

                    <div className="row">

                        <div className="container col-3">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> <br />
                            <strong>{book.volumeInfo.title}</strong> <br />
                            <small>By: {book.volumeInfo.authors}</small> <br />
                        </div>

                        <div className="col-8">
                            <div>{book.volumeInfo.description ?
                                        (book.volumeInfo.description.length > 700? 
                                            book.volumeInfo.description.substring(0,700) + "..."
                                            : book.volumeInfo.description)
                                    : null}
                            </div>
                        </div>

                    </div>

                </li>

            })
                : <SkeletonList />
            }
        </ul>
    )
}
