import React from "react";
import { connect, useDispatch } from "react-redux";
import { getService } from "../actions";
import { Link } from "react-router-dom";
import "./GetService.css";

import netflixLogo from "../images/netflixLogo.jpeg"
import huluLogo from "../images/huluLogo.jpeg"
import disneyLogo from "../images/disneyLogo.jpeg"
import hboLogo from "../images/hboLogo.jpeg"
import primeLogo from "../images/primeLogo.jpeg"

const GetService = () => {
    const dispatch = useDispatch();

    const pickedNetflix = () => {
        dispatch(getService('netflix'))
    }
    const pickedHulu = () => {
        dispatch(getService('hulu'))
    }
    const pickedDisney = () => {
        dispatch(getService('disney'))
    }
    const pickedHbo = () => {
        dispatch(getService('hbo'))
    }
    const pickedPrime = () => {
        dispatch(getService('prime'))
    }

    return (
        <div id='streamingLogos'>
            <Link to='/results'>
                <input
                    className='streamingLogo'
                    type='image'
                    src={netflixLogo}
                    onClick={pickedNetflix}
                />
            </Link>

            <Link to='/results'>
                <input
                    className='streamingLogo'
                    type='image'
                    src={huluLogo}
                    onClick={pickedHulu}
                />
            </Link>

            <Link to='/results'>
                <input
                    className='streamingLogo'
                    type='image'
                    src={disneyLogo}
                    onClick={pickedDisney}
                />
            </Link>

            <Link to='/results'>
                <input
                    className='streamingLogo'
                    type='image'
                    src={hboLogo}
                    onClick={pickedHbo}
                />
            </Link>

            <Link to='/results'>
                <input
                    className='streamingLogo'
                    type='image'
                    src={primeLogo}
                    onClick={pickedPrime}
                />
            </Link>

        </div>
    )

}


export default connect(null, { getService })(GetService);