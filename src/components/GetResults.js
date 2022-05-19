import React from "react";
import { getResults } from "../actions";
import { connect, useDispatch } from "react-redux";

const GetResults = (props) => {
    const dispatch = useDispatch();

    const fetch = () => dispatch(getResults());

    const renderList = () => {
        if (!props.results) {
            return (
                <div>
                    Click fetch
                </div>
            )
        }
        return props.results.results.map((result) => {
            return (
                <div key={result.imdbID}>
                    {result.dropURLs}
                </div>
            )
        });
    };

    return (
        <div>

            <button onClick={fetch}>
                Fetch
            </button>

            <div>
                {renderList()}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return { results: state.params.apiResults }
}

export default connect(mapStateToProps, { getResults })(GetResults);