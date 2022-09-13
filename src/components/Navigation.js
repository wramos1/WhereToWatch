import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    const urlElements = window.location.href.split('/');
    console.log(urlElements)

    const goBack = () => {
        if (urlElements[3] !== 'WhereToWatch') {
            return (
                <button
                    style={{
                        position: 'fixed',
                        bottom: '0',
                        left: '0',
                        fontSize: '1.4em',
                        cursor: 'pointer',
                        color: 'rgb(31, 199, 177)',
                        padding: '0.3em 0.5em',
                        backgroundColor: 'black',
                        boxShadow: 'rgba(31, 199, 177, 0.418) 0px -30px 36px -28px inset'
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
                        color: 'rgb(31, 199, 177)',
                        padding: '0.3em 0.5em',
                        backgroundColor: 'black',
                        boxShadow: 'rgba(31, 199, 177, 0.418) 0px -30px 36px -28px inset'
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