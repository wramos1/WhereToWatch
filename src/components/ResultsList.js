import React from "react";
import { connect } from "react-redux";
import './ResultsList.css'

const ResultsList = (props) => {

    const mapResults = () => {
        if (props) {
            return props.data.results.map(result => {
                return (
                    <div key={result.imdbID} id='results'>
                        <img
                            className='result'
                            alt='imgPoster'
                            src={`https://image.tmdb.org/t/p/w300${result.posterPath}`}
                        />
                        <div
                            className='resultOverview'
                            onClick={() => validateStreamingLocale()}
                        >
                            {result.overview}
                        </div>

                    </div>
                )
            });
        }
    }

    const validateStreamingLocale = () => {
        if (props.service === 'disney') {

            window.open((`https://${props.service}plus.com`), '_blank', 'noopener,noreferrer');

        }
        else if (props.service === 'peacock') {

            window.open((`https://${props.service}tv.com`), '_blank', 'noopener,noreferrer');

        }
        else if (props.service === 'prime') {

            window.open((`https://${props.service}video.com`), '_blank', 'noopener,noreferrer');

        }

        window.open((`https://${props.service}.com`), '_blank', 'noopener,noreferrer');
    }

    const renderList = () => {
        if (!props.data) {
            return (
                <div id='loading'>
                    Loading
                </div>
            )

        } else if (props.data.results.length === 0) {
            return (
                <div id='noResults'>
                    No results found
                </div>
            )
        }

        return (
            <div id="mainResults">
                <h1>
                    Results
                </h1>

                <div id="resultsContainer">
                    {mapResults()}
                </div>

            </div>
        )
    };


    return (
        <div>
            {renderList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { data: state.params.apiResults, service: state.params.service };
};

export default connect(mapStateToProps)(ResultsList);