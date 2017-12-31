import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-b3daa.firebaseio.com/'
});

export default instance;