import React from 'react';
import './index.css'

export default function index(props) {

    return (
        <div className="col-12">
            <strong className="ml-5 float-left">Book Search</strong>
            <form className="form-inline col-12"
                onSubmit={(e) => {
                    e.preventDefault();
                    return props.findBooks();
                }}>
                <div className="input-group col-12 m-2">
                    <input type="text" className="form-control col-12" id="inlineFormInputGroupUsername2" placeholder="Harry Potter"
                        onChange={(e) => {
                            props.setQuery(e.currentTarget.value);
                        }}
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-light mb-2">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
