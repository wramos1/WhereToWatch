import {
    GET_TYPE,
    GET_SERVICE,
    GET_KEYWORD,
    GET_RESULTS,
    GET_RANDOWORD
} from '../actions/types';

const INITIAL_STATE = {
    type: null,
    service: null,
    keyword: null,
    apiResults: null,
    randomWord: null
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
        case GET_RANDOWORD:
            return { ...state, randomWord: action.payload };
        default:
            return state;
    };
};