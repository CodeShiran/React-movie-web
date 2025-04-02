const API_KEY = '72074bcb6dc1bad4ccfa93dfdff3a5b9'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
    const respond = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await respond.json()
    return data.results
}

export const searchMovies = async (query) => {
    const respond = await fetch(`${BASE_URL}/search/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await respond.json()
    return data.results
}