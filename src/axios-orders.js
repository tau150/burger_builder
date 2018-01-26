import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-eb72e.firebaseio.com/'
});

export default instance;