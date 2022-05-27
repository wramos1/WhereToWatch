import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    const urlElements = window.location.href.split('/');

    const goBack = () => {
        if (urlElements[3] !== '') {
            return (
                <button
                    style={{
                        position: 'fixed',
                        bottom: '0',
                        left: '0',
                        fontSize: '1.4em',
                        cursor: 'pointer',
                        color: 'rgb(31, 199, 177)',
                        backgroundColor: 'black'
                    }}
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            );
        };
    };

    const startOver = () => {
        if (urlElements[3] === 'results') {
            return (
                <button
                    style={{
                        position: 'fixed',
                        bottom: '0',
                        right: '0',
                        fontSize: '1.4em',
                        cursor: 'pointer',
                        color: ' rgb(31, 199, 177)',
                        backgroundColor: 'black'
                    }}
                    onClick={() => window.location.replace(process.env.PUBLIC_URL)}
                >
                    Start Over
                </button >
            );
        };
    };

    return (
        <div>
            {goBack()}
            {startOver()}
        </div>
    );
};

export default Navigation;