import {
    GET_TYPE,
    GET_SERVICE,
    GET_KEYWORD,
    GET_RESULTS
} from '../actions/types';

const INITIAL_STATE = {
    type: null,
    service: null,
    keyword: null,
    apiResults: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TYPE:
            return { ...state, type: action.payload };
        case GET_SERVICE:
            return { ...state, service: action.payload };
        case GET_KEYWORD:
            return { ...state, keyword: action.payload };
        case GET_RESULTS:
            return { ...state, apiResults: action.payload };
        default:
            return state;
    }
}