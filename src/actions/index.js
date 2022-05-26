import availableStreams from '../apis/availableStreams';
import randomWord from '../apis/randomWord';
import {
    GET_TYPE,
    GET_SERVICE,
    GET_KEYWORD,
    GET_RESULTS,
    GET_RANDOWORD
} from './types';



export const getType = (type) => {
    return {
        type: GET_TYPE,
        payload: type
    };
};

export const getService = (service) => {
    return {
        type: GET_SERVICE,
        payload: service
    };
};

export const getKeyword = (keyword) => {
    return {
        type: GET_KEYWORD,
        payload: keyword
    };
};


export const getResults = () => async (dispatch, getState) => {

    const { type } = getState().params;
    const { service } = getState().params;
    const { keyword } = getState().params;
    const { randomWord } = getState().params;

    const response = await availableStreams.get('', {
        params: {
            type: type,
            service: service,
            keyword: keyword || randomWord
        }
    });

    dispatch({ type: GET_RESULTS, payload: response.data });
};

export const getRandomWord = () => async (dispatch) => {
    const response = await randomWord.get('');

    dispatch({ type: GET_RANDOWORD, payload: response.data });

}