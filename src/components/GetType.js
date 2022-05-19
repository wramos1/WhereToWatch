import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getType } from "../actions";

const GetType = () => {

    const dispatch = useDispatch();

    const pickedMovie = () => {
        dispatch(getType('movie'))

    }

    const pickedShow = () => {
        dispatch(getType('show'))
    }



    return (
        <div>

            <Link to='/service'>
                <button onClick={pickedMovie}>Movie</button>
            </Link>

            <div>
                <h3>Show</h3>
                <button onClick={pickedShow}>Show</button>
            </div>


        </div>
    )

}


export default connect(null, { getType })(GetType);