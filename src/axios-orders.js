import axios from 'axios';
import keys from './config/keys'

const instance = axios.create({
    baseURL: keys.baseUrlFirebase
});

export default instance;