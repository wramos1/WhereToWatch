import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getType } from "../actions";
import './GetType.css';

const GetType = () => {

    const dispatch = useDispatch();

    const pickedMovie = () => {
        dispatch(getType('movie'));
    };

    const pickedShow = () => {
        dispatch(getType('series'));
    };

    return (
        <div id='splitScreenDecision'>

            <Link to='/service' id='pickMovie' onClick={pickedMovie}>

                <div>

                    <h1>Movie</h1>

                </div>

            </Link>

            <Link to='/service' id='pickShow' onClick={pickedShow}>

                <div>

                    <h1>Series</h1>

                </div>

            </Link>

        </div>
    );

};


export default connect(null, { getType })(GetType);