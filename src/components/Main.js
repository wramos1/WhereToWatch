import React from "react";
import { Link } from "react-router-dom";

const Main = () => {

    return (
        <div>

            <h1>
                WHERE TO WATCH?
            </h1>

            <h4>
                The place you go to find where you need to be
            </h4>

            <Link to='/type'>
                <button>
                    Find Where to Watch Now
                </button>
            </Link>

        </div>
    )
}

export default Main;