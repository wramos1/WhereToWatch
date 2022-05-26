import React from "react";
import { connect, useDispatch } from "react-redux";
import { getService } from "../actions";
import { Link } from "react-router-dom";
import "./GetService.css";

import netflixLogo from "../images/netflixLogo.jpeg";
import huluLogo from "../images/huluLogo.jpeg";
import disneyLogo from "../images/disneyLogo.jpeg";
import hboLogo from "../images/hboLogo.jpeg";
import primeLogo from "../images/primeLogo.jpeg";
import appleLogo from "../images/appleLogo.jpeg";
import peacockLogo from "../images/peacockLogo.jpeg";
import paramountLogo from "../images/paramountLogo.jpeg";
import showtimeLogo from "../images/showtimeLogo.jpeg";
import mubiLogo from "../images/mubiLogo.jpeg";
import starzLogo from "../images/starzLogo.jpeg";

const GetService = () => {

    const dispatch = useDispatch();

    const pickedNetflix = () => {
        dispatch(getService('netflix'));
    };

    const pickedHulu = () => {
        dispatch(getService('hulu'));
    };

    const pickedDisney = () => {
        dispatch(getService('disney'));
    };

    const pickedHbo = () => {
        dispatch(getService('hbo'));
    };

    const pickedPrime = () => {
        dispatch(getService('prime'));
    };

    const pickedApple = () => {
        dispatch(getService('apple'));
    };

    const pickedPeacock = () => {
        dispatch(getService('peacock'));
    };

    const pickedParamount = () => {
        dispatch(getService('paramount'));
    };

    const pickedShowtime = () => {
        dispatch(getService('showtime'));
    };

    const pickedMubi = () => {
        dispatch(getService('mubi'));
    };

    const pickedStarz = () => {
        dispatch(getService('starz'));
    };

    return (
        <div>

            <h1 id='serviceTitle'>
                Choose Streaming Service
            </h1>

            <div id='streamingLogos'>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='netflixLogo'
                        className='streamingLogo'
                        type='image'
                        src={netflixLogo}
                        onClick={pickedNetflix}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='huluLogo'
                        className='streamingLogo'
                        type='image'
                        src={huluLogo}
                        onClick={pickedHulu}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='disneyLogo'
                        className='streamingLogo'
                        type='image'
                        src={disneyLogo}
                        onClick={pickedDisney}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='hboLogo'
                        className='streamingLogo'
                        type='image'
                        src={hboLogo}
                        onClick={pickedHbo}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='primelogo'
                        className='streamingLogo'
                        type='image'
                        src={primeLogo}
                        onClick={pickedPrime}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='applelogo'
                        className='streamingLogo'
                        type='image'
                        src={appleLogo}
                        onClick={pickedApple}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='peacocklogo'
                        className='streamingLogo'
                        type='image'
                        src={peacockLogo}
                        onClick={pickedPeacock}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='paramountlogo'
                        className='streamingLogo'
                        type='image'
                        src={paramountLogo}
                        onClick={pickedParamount}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='showtimelogo'
                        className='streamingLogo'
                        type='image'
                        src={showtimeLogo}
                        onClick={pickedShowtime}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='mubilogo'
                        className='streamingLogo'
                        type='image'
                        src={mubiLogo}
                        onClick={pickedMubi}
                    />
                </Link>

                <Link to='/search' className='logo-container'>
                    <input
                        alt='starzlogo'
                        className='streamingLogo'
                        type='image'
                        src={starzLogo}
                        onClick={pickedStarz}
                    />
                </Link>

            </div>

        </div>
    );

};


export default connect(null, { getService })(GetService);