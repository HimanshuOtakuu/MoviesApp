// {
//     type: "Please host your work on a private link",
//     movies: [m1,m2,m2]
// }

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const UN_FAVOURITE = "UN_FAVOURITE";
export const SET_SHOW_FAV = "SET_SHOW_FAV";
export const ADD_MOVIES_TO_LIST = "ADD_MOVIES_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

export function addMovies (movies){
    return{
        type: ADD_MOVIES,
        movies
    }
} 

export function addFavourite (movie){
    return{
        type: ADD_FAVOURITE,
        movie
    }
} 

export function unFavourite (movie){
    return{
        type: UN_FAVOURITE,
        movie
    }
} 

export function addMoviesTolist (movie){
    return{
        type: ADD_MOVIES_TO_LIST,
        movie
    }
} 

export function setShowFavourite (val){
    return{
        type: SET_SHOW_FAV,
        val
    }
} 

export function handleMovieSearch(movie){
    const url = `http://omdbapi.com/?i=tt3896198&apikey=410b499&t=${movie}`;
    return function(dispatch){
        fetch(url)
            .then(Response => Response.json())
            .then(movie => {
                console.log(movie);
            })

        dispatch(addMovieSearchResult(movie));
    }
}

export function addMovieSearchResult(movie){
    return{
        type: ADD_SEARCH_RESULT,
        movie
    };
}
