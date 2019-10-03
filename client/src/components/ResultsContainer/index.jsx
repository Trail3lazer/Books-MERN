import React from 'react';
import { Link } from 'react-router-dom'
import SkeletonList from '../../components/SkeletonList';
import './index.css'

export default function ResultsContainer(props) {
    console.log(props.results)
    return (
        <ul className="list-group">
            {props.results.length !== 0 ? props.results.map((book) => {

                return book.volumeInfo ?
                    <li className="list-group-item list-group-flush" key={book.id}>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> <br />
                        <strong>{book.volumeInfo.title}</strong> <br />
                        By: {book.volumeInfo.authors} <br />
                        <a href={book.volumeInfo.previewLink}>Preview</a>
                        <Link className="text-warning float-right" to="/favorites"
                            onClick={() => props.db.post(book)}>Favorite</Link>
                    </li>
                    : <li className="list-group-item list-group-flush" key={book._id}>
                        <img src={'https://thumbs-prod.si-cdn.com/ufPRE9RHUDHqQdOsLvYHhJAxy1k=/fit-in/1600x0/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg'
                        } alt={book.title} /> <br />
                        <strong>{book.title}</strong> <br />
                        By: {book.author}
                    </li>

            })
            : <SkeletonList />
        }
        </ul>
    )
}
