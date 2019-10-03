import React, { useState, useEffect } from 'react';
import ResultsContainer from '../../components/ResultsContainer'
import './index.css'

const SavedPage = (props) => {
    const [faves, setFaves] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let books = await props.db.find()
            setFaves(books)
        }
        getData();
    }, [props.db])

    return (
        <div>
            <ResultsContainer results={faves} />
        </div>
    )
}

export default SavedPage;