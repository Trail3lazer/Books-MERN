import React from 'react';
import './index.css'

export default function index(props) {

    return (
        <form className="form-inline"
            onSubmit={(e) => {
                e.preventDefault();
                return props.findBooks();
            }}>
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"
                    onChange={(e) => {
                        props.setQuery(e.currentTarget.value);
                    }}
                />
            </div>
        </form>
    )
}
