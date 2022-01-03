import axios from 'axios';

const API_KEY = 'e7831e9507e60354159c1f590144c49c'

export const initServices = () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
}

export const getMovie = (id) => {
  return axios.get('/movie/'+ id +'?api_key=' + API_KEY)
}

export const getTv = (id) => {
  return axios.get('/tv/'+ id +'?api_key=' + API_KEY)
}

export const getFreeToWatchItems = (type = 'movie') => {
  return axios.get('/trending/'+type+'/week?api_key=' + API_KEY)
}

export const searchMovieByQuery = (query) => {
  return axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`)
}


