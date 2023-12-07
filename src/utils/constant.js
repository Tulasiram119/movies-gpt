export const logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const netflixLogo =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const USERAVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMBD_KEY,
  },
};

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming";

export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},
                                    {identifier:"hindi",name:"Hindi"},
                                    {identifier:"telugu",name:"Telugu"}];

                                    
export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY;
export const SEARCH_MOVIES = 'https://api.themoviedb.org/3/search/movie?query=chatrapathi&include_adult=false&language=en-US&page=1';