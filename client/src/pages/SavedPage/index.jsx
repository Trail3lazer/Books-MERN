import React, { useState, useEffect } from 'react';
import ResultsContainer from '../../components/ResultsContainer';
import Hero from '../../components/Hero';
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
        <div className="container">
            <Hero children={<div />}/>
            <ResultsContainer results={faves} />
        </div>
    )
}

export default SavedPage;