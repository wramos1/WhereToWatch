import React from "react";
import { Link } from "react-router-dom";
import './Main.css';

const Main = () => {

    return (
        <div id='mainPage'>

            <h1 id='title'>
                WHERE TO WATCH?
            </h1>

            <h4 id='subtitle'>
                The place you go to find where you need to be
            </h4>

            <Link to='/type' id='startButton'>
                <button>
                    Find Where to Watch
                </button>
            </Link>

        </div>
    )
}

export default Main;