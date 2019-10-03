import React, { useState } from 'react';
import Results from '../../components/ResultsContainer';
import SearchBar from '../../components/SearchBar';
import Hero from '../../components/Hero'

import './index.css';

const SearchPage = (props) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const findBooks = async () => {
        const trimmedQ = JSON.stringify(query).trim();
        const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + trimmedQ)
        let results = await res.json();
        return setResults(results.items);
    }

    return (
        <div className="container">
            <Hero
                children={
                    <SearchBar findBooks={findBooks} setQuery={setQuery} value={query} />
                }
            />
            <Results db={props.db} results={results} />

        </div>
    )
}

export default SearchPage;