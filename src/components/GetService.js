import React from "react";
import { connect, useDispatch } from "react-redux";
import { getService } from "../actions";
import { Link } from "react-router-dom";

const GetService = () => {
    const dispatch = useDispatch();

    const pickedNetflix = () => {
        dispatch(getService('netflix'))
    }

    return (
        <div>
            <Link to='/results'>
                <button onClick={pickedNetflix}>Netflix</button>
            </Link>

        </div>
    )

}


export default connect(null, { getService })(GetService);