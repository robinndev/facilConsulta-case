import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api-teste-front-end-fc.herokuapp.com',
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
  },
});

export default http;
