const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = 'bc6968961bf7133c0e99d9e9f501e512';



const popularMoviesURL = `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const trendingNowURL = `trending/movie/week?api_key=${API_KEY}`;
const topRatedURL = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const upcomingURL = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const popularTVshowsURL = `tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
const topRatedTVShowsURL = `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const trendingNowTvURL = `trending/tv/week?api_key=${API_KEY}`;


export const fetchPopularMoviesUrl = () => `${BASE_URL}${popularMoviesURL}`;
  
export const fetchTrendingNowUrl = () => `${BASE_URL}${trendingNowURL}`;
export const fetchTopRatedMoviesUrl = () => `${BASE_URL}${topRatedURL}`;
export const fetchUpcomingMoviesUrl = () => `${BASE_URL}${upcomingURL}`;
export const fetchPopularTVShowsUrl = () => `${BASE_URL}${popularTVshowsURL}`;
export const fetchTopRatedTVShowsUrl = () => `${BASE_URL}${topRatedTVShowsURL}`;
export const fetchTrendingTVShowsUrl = () => `${BASE_URL}${trendingNowTvURL}`;


export const fetchMovieDetailsUrl = (movieId) =>
  `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;

export const fetchTvDetailsUrl = (tvId) =>
  `${BASE_URL}tv/${tvId}?api_key=${API_KEY}&language=en-US`;

export const fetchSimilarMoviesUrl = (movieId) =>
  `${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchSimilarTVUrl = (TvId) =>
  `${BASE_URL}tv/${TvId}/similar?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchMovieTrailersUrl = (movieId) =>
  `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;

export const fetchTVTrailersUrl = (tvId) =>
  `${BASE_URL}tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`;

export const fetchMovieCastsUrl = (movieId) =>
  `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

export const fetchTVCastsUrl = (tvId) =>
  `${BASE_URL}/tv/${tvId}/credits?api_key=${API_KEY}`;