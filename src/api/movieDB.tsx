import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fd6e6e97276183956c3334241bf7dcf8',
    language: 'es-ES',
  },
});

export default movieDB;
