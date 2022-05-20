import axios from "axios";

export default axios.create({
    baseURL: 'https://streaming-availability.p.rapidapi.com/search/basic',
    params: {
        country: 'us',
        page: '1',
        output_language: 'en',
        language: 'en'
    },
    headers: {
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
        'X-RapidAPI-Key': ''
    }
});