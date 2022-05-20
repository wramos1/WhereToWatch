import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getType } from "../actions";
import './GetType.css';

const GetType = () => {

    const dispatch = useDispatch();

    const pickedMovie = () => {
        dispatch(getType('movie'))

    }

    const pickedShow = () => {
        dispatch(getType('show'))
    }



    return (
        <div id='splitScreenDecision'>

            <Link to='/service' id='pickMovie'>
                <div onClick={pickedMovie}>
                    <h1>Movie</h1>
                </div>
            </Link>

            <Link to='/service' id='pickShow'>
                <div onClick={pickedShow}>
                    <h1>Show</h1>
                </div>
            </Link>


        </div>
    )

}


export default connect(null, { getType })(GetType);