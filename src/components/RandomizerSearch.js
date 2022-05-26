import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getRandomWord, getResults } from "../actions";
import './SearchBar.css'

const RandomizerSearch = () => {
    const dispatch = useDispatch();

    const randomSearch = () => {
        dispatch(getRandomWord());
        setTimeout(() => {
            dispatch(getResults());
        }, 2800);
    };

    return (
        <div id='randomContent'>

            <h3>
                Try our Randomizer
            </h3>


            <Link to='/results' onClick={randomSearch} id='randomizer'>
                Randomizer
            </Link>

        </div>
    );
};

export default connect(null, { getRandomWord, getResults })(RandomizerSearch);