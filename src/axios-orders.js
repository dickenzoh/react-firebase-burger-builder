import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-e0bbd.firebaseio.com/'
});

export default instance;