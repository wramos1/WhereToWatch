import React, { useState } from "react";
import { getKeyword, getResults } from "../actions";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

import RandomizerSearch from "./RandomizerSearch";

const SearchBar = () => {
    const [term, setTerm] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const fetchSearchResults = () => {
        navigate('/results');
        dispatch(getKeyword(term));
        setTimeout(() => {
            dispatch(getResults());
        }, 2800);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        fetchSearchResults();
    };


    return (
        <div>

            <form onSubmit={onSubmit}>

                <h2 id="searchLabel">
                    Search
                </h2>

                <div id='searchForm'>

                    <input
                        autoComplete='off'
                        id='inputBox'
                        type='text'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder='Search for...'
                    />

                </div>

            </form>

            <h4 id="randomContent">
                Don't have a specific movie in mind?
            </h4>

            <RandomizerSearch />

        </div>
    )
};



export default connect(null, { getResults, getKeyword })(SearchBar);