import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '39055487442f2d36b52a5f39d02dd741',
    language: 'pt-BR',
    page: 1
  }
})

export default api